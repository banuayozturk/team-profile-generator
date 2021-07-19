const Engineer = require("../lib/Engineer");

test("Can set github account with constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Banu", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Banu", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get github username with getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Banu", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});