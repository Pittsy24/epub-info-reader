const reader = require("../index");
const expect = require("chai").expect;

describe("parseEpub", () => {
  describe("Get title", () => {
    it("Get's the books title", () => {
      reader.parseEpub("test/test.epub", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        expect(data.title).to.equal("The title");
      });
    });
  });

  describe("Get author", () => {
    it("Get's the books author", () => {
      reader.parseEpub("test/test.epub", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        expect(data.creator).to.equal("The author");
      });
    });
  });

  describe("Get publisher", () => {
    it("Get's the books publisher", () => {
      reader.parseEpub("test/test.epub", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        expect(data.publisher).to.equal("The publisher");
      });
    });
  });

  describe("Get date", () => {
    it("Get's the books date", () => {
      reader.parseEpub("test/test.epub", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        expect(data.date).to.equal(undefined);
      });
    });
  });
  describe("Get id", () => {
    it("Get's the books id", () => {
      reader.parseEpub("test/test.epub", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        expect(data.ID["$t"]).to.equal("0-4813-7307-1");
      });
    });
  });
  describe("Get language", () => {
    it("Get's the books language", () => {
      reader.parseEpub("test/test.epub", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        expect(data.language).to.equal("en");
      });
    });
  });
  describe("Get copyright", () => {
    it("Get's the books copyright", () => {
      reader.parseEpub("test/test.epub", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        expect(data.copyright).to.equal("© copyright notice");
      });
    });
  });
  describe("Get cover path", () => {
    it("Get's the books cover path", () => {
      reader.parseEpub("test/test.epub", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        expect(data.coverPath).to.equal("Images/cover.jpg");
      });
    });
  });
});
describe("getCover", () => {
  describe("Get cover filetype", () => {
    it("Get's the books cover file type (jpg, png, etc)", () => {
      reader.getCover("test/test.epub", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        expect(data[0]).to.equal("jpg");
      });
    });
  });
  describe("Get cover", () => {
    it("Get's the books cover as a base64 string", () => {
      reader.getCover("test/test.epub", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        expect(data[1]).to.equal(
          "/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAABAAEDAREAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAAB//EABUBAQEAAAAAAAAAAAAAAAAAAAYI/9oADAMBAAIQAxAAAAE5C1T/AP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQ/wD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/EH//2Q=="
        );
      });
    });
  });
});