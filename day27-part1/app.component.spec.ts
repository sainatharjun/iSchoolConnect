import { AppComponent } from './app.component';

describe("Testing AppComponent",()=>{
  let app:AppComponent;

  describe("Testing Title",()=>{
    beforeAll(()=>{
      app = new AppComponent();
      console.log("Before All was called");
    });
    beforeEach(()=>{
      console.log("Before Each was called");
    });
    afterEach(()=>{
      console.log("After Each was called");
    });
    afterAll(()=>{
      console.log("After All was called");
    });
  
    it("should check for app to be defined",()=>{
      console.log("1 test was called");
      expect(app).toBeDefined();
    });
  
    it("should check for title on app is defined",()=>{
      console.log("2 test was called");
      expect(app.title).toBeDefined();
    });
    it("should check for title on app is iSchool",()=>{
      console.log("3 test was called");
      expect(app.title).toBe('iSchool');
    });
    it("should check for title on app to contain 7 chars",()=>{
      console.log("4 test was called");
      expect(app.title.length).toBe(7);
    });

  });

  describe("Test for UserAge",()=>{
    beforeAll(()=>{
      app = new AppComponent();
      console.log("Before All was called");
    });
    it("should check for userage to be defined",()=>{
        expect(app.userage).toBeDefined();
    });
    it("should check for userage to be 18",()=>{
        expect(app.userage).toBe(18);
    });
    it("should check for userage to be 19",()=>{
        app.increaseAge();
        expect(app.userage).toBe(19);
    });
    afterEach(()=>{
      app.userage = 18;
    })
  })

})