import { HL7Index } from "../models/hl7"

export class InvalidHL7MessageException extends Error {
    constructor() {
        super("Invalid HL7 message")
        this.name = "InvalidHL7MessageException"
    }
}
export class SegmentNotFoundException extends Error {
    constructor(segmentName: string) {
        super(`Segment ${segmentName} not found in the message`)
        this.name = "SegmentNotFoundException"
    }
}

export class FieldNotFoundException extends Error {
    constructor(index: HL7Index) {
        const { fieldIndex, componentIndex, subComponentIndex, repetitionIndex } = index
        super(`Field with index ${fieldIndex}.${componentIndex}.${subComponentIndex}.${repetitionIndex} not found`)
        this.name = "FieldNotFoundException"
    }
}

export class InvalidFieldIndex extends Error {
    constructor(index: HL7Index) {
        const { fieldIndex, componentIndex, subComponentIndex, repetitionIndex } = index
        super(`Invalid field index: ${fieldIndex}.${componentIndex}.${subComponentIndex}.${repetitionIndex}`)
        this.name = "InvalidFieldIndex"
    }
}

export class ReportNotFoundException extends Error {
    constructor(message:string) {
        super(message)
        this.name = "ReportNotFoundException"
    }
}