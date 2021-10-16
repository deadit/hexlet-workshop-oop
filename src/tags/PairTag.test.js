const PairTag = require("./PairTag")

// @ponicode
describe("toString", () => {
    let inst

    beforeEach(() => {
        inst = new PairTag.default("Anas", [false, true, false], "html")
    })

    test("0", () => {
        let callFunction = () => {
            inst.toString()
        }
    
        expect(callFunction).not.toThrow()
    })
})
