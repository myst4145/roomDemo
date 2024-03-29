class Display {
    static getRoomtype(roomType) {

        return [
            { 'key': 'standard', 'value': 'Standard' },
            { 'key': 'superior', 'value': 'Superior' },
            { 'key': 'deluxe', 'value': 'Deluxe' },
            { 'key': 'suite', 'value': 'Suite' },
            { 'key': 'family', 'value': 'Family' },
            { 'key': 'studio', 'value': 'Studio' },
            { 'key': 'connecting', 'value': 'Connecting' },
            { 'key': 'duplex', 'value': 'Duplex' },
            { 'key': 'villa', 'value': 'Villa' },
            { 'key': 'adjoining', 'value': 'Adjoining' },
            { 'key': 'cabana', 'value': 'Cabana' },
            { 'key': 'honeymoon', 'value': 'Honeymoon' },
            { 'key': 'roomtype-no-specify', 'value': 'ไม่ระบุ' },
        ].filter((d) => d.key == roomType)[0].value

    }
    static resBed(bed) {
        return [
            { 'key': 'king-sized', 'value': 'King Sized' },
            { 'key': 'queen-sized', 'value': 'Queen Sized' },
            { 'key': 'single-bed', 'value': 'Single' },
            { 'key': 'twin-bed', 'value': 'Twin' },
            { 'key': 'double-bed', 'value': 'Double' },
            { 'key': 'triple-bed', 'value': 'Triple' },
            { 'key': 'quad-bed', 'value': 'Quad' },
            { 'key': 'bedtype-no-specify', 'value': 'ไม่ระบุ' }
        ].filter((d) => d.key == bed)[0].value
    }
    static toCapitalize(str) {
        const firstChar = str.substring(0, 1).toUpperCase()
        const capitalize = `${firstChar}${str.substring(1)}`
        return capitalize
    }
    static getRoomview(view) {
        return [
            { 'key': 'garden-view', 'value': 'Garden' },
            { 'key': 'seaview', 'value': 'Seaview' },
            { 'key': 'poolview', 'value': 'Pool View' },
            { 'key': 'pool-access', 'value': 'Pool Access' },
            { 'key': 'beach-front', 'value': 'Beach Front' },
            { 'key': 'view-no-specify', 'value': 'ไม่ระบุ' },
        ].filter((d) => d.key == view)[0].value
    }
    static unitTimes(unit) {
        const unit_dict_key = ['minutes', 'hours', 'days', 'weeks', 'months', 'years']
        const unit_dict_val = ['นาที', 'ชั่วโมง', 'วัน', 'สัปดาห์', 'เดือน', 'ปี']
        return unit_dict_val[unit_dict_key.indexOf(unit)]
    }




    static resSpecialOptions(opt) {
        return [
            { 'key': 'non-special-options', 'value': 'ไม่มี' },
            { 'key': 'fridge', 'value': 'ตู้เย็น' },
            { 'key': 'fan', 'value': 'พัดลม' },
            { 'key': 'air', 'value': 'แอร์' },
            { 'key': 'microwave', 'value': 'ไมโครเวฟ' },
            { 'key': 'tv', 'value': 'TV' },
            { 'key': 'washing-machine', 'value': 'เครื่องซักผ้า' },
            { 'key': 'electric-pan', 'value': 'กระทะไฟฟ้า ' },
            { 'key': 'induction-stove', 'value': 'เตาแม่เหล็กไฟฟ้า' },
            { 'key': 'vacuum-cleaner', 'value': 'เครื่องดูดฝุ่น' },
            { 'key': 'electric-kettle', 'value': 'กาต้มน้ำไฟฟ้า' },
            { 'key': 'water-heater', 'value': 'เครื่องทำน้ำอุ่น' },
            { 'key': 'bathtub', 'value': 'อ่างอาบน้ำ' },
        ].filter((d) => d.key == opt)[0].value
    }

    static setNumberFormat(num) {
        num = Math.round(Number.parseFloat(num))
        return new Intl.NumberFormat('th-TH', {
            style: "currency",
            currency: 'THB'
        }).format(num)
    }
    static countDate(d) {
        return d.toString().length == 1 ? `0${d}` : d
    }
    static setPayment(p) {
        return p == 'cash-payment' ? 'จ่ายเงินสด' : 'โอนผ่านธนาคาร'
    }
    static getBank(bank) {
        return [
            { 'key': 'bbl', 'value': 'ธนาคารกรุงเทพ' },
            { 'key': 'k-bank', 'value': 'ธนาคารกสิกรไทย' },
            { 'key': 'ktb', 'value': 'ธนาคารกรุงไทย' },
            { 'key': 'ttb', 'value': 'ธนาคารทหารไทยธนชาต' },
            { 'key': 'scb', 'value': 'ธนาคารไทยพาณิชย์' },
            { 'key': 'uob', 'value': 'ธนาคารยูโอบี' },
            { 'key': 'bay', 'value': 'ธนาคารกรุงศรีอยุธยา' },
            { 'key': 'gsb', 'value': 'ธนาคารออมสิน' },
            { 'key': 'baac', 'value': 'ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร' },
            { 'key': 'tisco', 'value': 'ธนาคารทิสโก้' },
            { 'key': 'cimb', 'value': 'ธนาคารซีไอเอ็มบีไทย' },
            { 'key': 'kkp', 'value': 'ธนาคารเกียรตินาคินภัทร' }
        ].filter(e => e.key == bank).map((e) => e.value)
    }

    static bookingStatus(status) {
        return [
            { 'key': 'progress', 'value': 'รอการยืนยัน' },
            { 'key': 'cancel', 'value': 'ถูกยกเลิก' },
            { 'key': 'confirm', 'value': 'ยันยันแล้ว' },
            { 'key': 'resting', 'value': 'พักอยู่' },
            { 'key': 'success', 'value': 'เช็คอินเรียบร้อย' },
        ].filter((e => e.key == status))[0].value
    }

    static setDate(stamp) {
        const d = new Date(stamp)
        const dt = this.countDate(d.getDate())
        const m = this.countDate(d.getMonth() + 1)
        const y = d.getFullYear()
        return `${y}-${m}-${dt}`
    }
    static thisPage(page) {
        return !page.includes('&') ? page : page.substring(0, page.indexOf('&'))
    }

}