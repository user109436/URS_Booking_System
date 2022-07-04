export class Validate {
    static fileType(type) {
        if (type !== "application/pdf")
            return false

        return true
    }

    static fileSize(size, sizeLimit) {
        if (size >= sizeLimit)
            return false

        return true
    }

}