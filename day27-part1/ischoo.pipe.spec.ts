import { ISchoolPipe } from "./ischool.pipe";

describe("Test ISchoolPipe",()=>{
    let ischoolpipe:ISchoolPipe;

    beforeEach(()=>{
        console.log("beforeEach from ischoolpipe was called");
        ischoolpipe = new ISchoolPipe();
    });

    it("should check if the ischoolpipe is defined",()=>{
        expect(ischoolpipe).toBeDefined();
    });
    it("should check if the ischoolpipe working",()=>{
        expect(ischoolpipe.transform('vijay','hi')).toBe('hi vijay');
    });

})