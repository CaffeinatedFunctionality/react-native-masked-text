import BaseMask from './_base.mask'
import CustomMask from './custom.mask'

const ZIP_CODE_MASK = '99999-9999'

const MASK_OPTIONS = {
    mask: ZIP_CODE_MASK
}

export default class ZipCodeMask extends BaseMask {
    static getType() {
        return 'zip-code'
    }

    getValue(value, settings) {
        return CustomMask.shared.getValue(value, MASK_OPTIONS)
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotNumbers(maskedValue)
    }

    validate(value, settings) {
        if (!!value) {
            return /^\d{5}(-?\d{3,4})?$/.test(value)
        }

        return true
    }

    getMask(value, settings) {
        return ZIP_CODE_MASK
    }
}
