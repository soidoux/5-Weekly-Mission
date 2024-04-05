export function fetchUserData() {
  return fetch("https://bootcamp-api.codeit.kr/api/sample/user").then(
    (response) => {
      if (!response.ok) {
        throw Error("Network response was not ok");
      }
      return response.json();
    }
  );
}

export function fetchUserFolder() {
  return fetch("https://bootcamp-api.codeit.kr/api/sample/folder").then(
    (response) => {
      if (!response.ok) {
        throw Error("Network response was not ok");
      }
      return response.json();
    }
  );
}
