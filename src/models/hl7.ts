import { InvalidHL7MessageException, FieldNotFoundException, InvalidFieldIndex, SegmentNotFoundException, ReportNotFoundException } from "../exceptions/hl7Exceptions";

export class HL7Message {
    readonly metadata?: HL7Metadata | null;
    readonly messageId?: string;
    readonly content?: string | null;
    readonly timeStamp?: string | null;
    readonly clientId?: string;
    readonly source?: string | null;
    readonly type?: string | null;
    readonly shaChecksum?: string | null;

    isValidMessage(): boolean {
        return this.metadata?.segments != null
    }

    getSegments(): ReadonlyArray<SegmentMetadata> {
        if (!this.isValidMessage()) {
            throw new InvalidHL7MessageException()
        }
        return this.metadata!.segments!;
    }

    getSegmentsWithName(name: string): ReadonlyArray<SegmentMetadata> {
        if (!this.isValidMessage()) {
            throw new InvalidHL7MessageException()
        }
        let segments = this.metadata!.segments!.filter(item => item.name == name);
        if (segments.length == 0) {
            throw new SegmentNotFoundException(name)
        }
        return segments;
    }

    getReport(): string {
        if (!this.isValidMessage()) {
            throw new InvalidHL7MessageException()
        }
        if (this.metadata!.type != "ORU") {
            throw new ReportNotFoundException("Report is only present in ORU messages")
        }
        const obxSegments = this.metadata!.segments!.filter(item => item.name == "OBX")
        if (obxSegments.length == 0) {
            throw new SegmentNotFoundException("OBX")
        }
        let report = ""
        obxSegments.forEach(segment => {
            let fields = segment.fields!.filter(element => element.fieldIndex == 5 && element.componentIndex == 1 && element.subComponentIndex == 1)
            fields = fields.sort(element => element.repetitionIndex!)
            fields.map (({value}) => value!).forEach(value => report.concat(value))
        });
        return report
    }
}

export interface HL7Metadata {
    readonly interface?: InterfaceMetadata | null;
    readonly type?: string | null;
    readonly typeVersion?: string | null;
    readonly controlIdentifier?: string | null;
    readonly sendingFacility?: string | null;
    readonly sendingApplication?: string | null;
    readonly receivingFacility?: string | null;
    readonly receivingApplication?: string | null;
    readonly transactionIdentifier?: string | null;
    readonly version?: string | null;
    readonly segments?: ReadonlyArray<SegmentMetadata> | null;
}

export interface FieldMetadata {
    readonly fieldIndex?: number;
    readonly componentIndex?: number;
    readonly subComponentIndex?: number;
    readonly repetitionIndex?: number;
    readonly value?: string | null;
}

export interface InterfaceMetadata {
    readonly port?: number;
    readonly client?: InterfaceClientMetadata | null;
}
export interface InterfaceClientMetadata { ipAddress?: string | null; port?: number }

export interface HL7Index {
    fieldIndex: number,
    componentIndex: number | 1,
    subComponentIndex: number | 1,
    repetitionIndex: number | 1,
}

export class SegmentMetadata {
    readonly name?: string | null;
    readonly order?: number;
    readonly fields?: ReadonlyArray<FieldMetadata> | null;

    isMshSegment(): boolean {
        return this.name == "MSH"
    }

    getValue(index: HL7Index): string {
        if (!this.hasIndex(index)) {
            throw new InvalidHL7MessageException()
        }
        if (!this.hasIndex(index)) {
            throw new FieldNotFoundException(index)
        }
        const { fieldIndex, componentIndex, subComponentIndex, repetitionIndex } = index
        const field = this.fields?.filter(f => f.fieldIndex == fieldIndex && f.componentIndex == componentIndex && f.subComponentIndex == subComponentIndex && f.repetitionIndex == repetitionIndex)[0];
        return field?.value!
    }

    hasIndex(index: HL7Index): boolean {
        const { fieldIndex, componentIndex, subComponentIndex, repetitionIndex } = index
        return this.fields?.some(f => f.fieldIndex == fieldIndex && f.componentIndex == componentIndex && f.subComponentIndex == subComponentIndex && f.repetitionIndex == repetitionIndex) ?? false
    }

    validateIndex(index: HL7Index): void {
        if (index.fieldIndex < 0 || index.componentIndex < 0 || index.subComponentIndex < 0 || index.repetitionIndex < 0) {
            throw new InvalidFieldIndex(index)
        }
    }
}