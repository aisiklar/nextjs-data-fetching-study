export async function getUsers() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let data = await fetch(url);

  let users = data.json();

  return users;
}
