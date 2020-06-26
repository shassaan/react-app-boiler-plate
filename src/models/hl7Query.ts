export interface HL7Message {
    metadata?: HL7Metadata | null;
    messageId?: StringDecorator;
    content?: StringDecorator | null;
    timeStamp?: DateTimeOffsetDecorator | null;
    clientId?: StringDecorator;
    source?: StringDecorator | null;
    type?: StringDecorator | null;
}

export interface HL7Metadata {
    type?: StringDecorator | null;
    typeVersion?: StringDecorator | null;
    controlIdentifier?: StringDecorator | null;
    sendingFacility?: StringDecorator | null;
    sendingApplication?: StringDecorator | null;
    receivingFacility?: StringDecorator | null;
    receivingApplication?: StringDecorator | null;
    transactionIdentifier?: StringDecorator | null;
    version?: StringDecorator | null;
    segments?: HL7SegmentDecorator | null;
}

export interface HL7SegmentDecorator {
    where?: HL7WhereObject[] | null;
}

export interface HL7WhereObject {
    index?: HL7SegmentIndex | null;
    isIn?: string[] | null;
    is?: string | null;
    isNot?: string | null;
    isNotIn?: string[] | null;
}
export interface HL7SegmentIndex {
    segment?: string | null;
    fieldIndex?: number;
    componentIndex?: number;
    subComponentIndex?: number;
    repetitionIndex?: number;
}

export interface StringDecorator {
    isIn?: string[] | null;
    isNotIn?: string[] | null;
    is?: string | null;
    isNot?: string | null;
}

export interface IntegerDecorator {
    is?: number | null;
    isNot?: number | null;
    isIn?: number[] | null;
    isNotIn?: number[] | null;
    from?: number | null;
    to?: number | null;
}

export interface DateTimeOffsetDecorator {
    is?: Date | null;
    isNot?: Date | null;
    from?: Date | null;
    to?: Date | null;
}

//TODO: add uuid type
export interface GuidDecorator {
    isIn?: string[] | null;
    isNotIn?: string[] | null;
    is?: string | null;
    isNot?: string | null;
}