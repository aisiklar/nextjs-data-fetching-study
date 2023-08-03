import UserInput from "@/components/userInput";

export default function Home() {
  //const users = await getUsers();
  //console.log("users", users);

  //   let dataToSend;
  let data = [
    {
      a: 1,
      b: 2,
      c: "hello",
    },
    {
      d: 10,
      e: 11,
      f: "world",
    },
  ];

  return (
    <div>
      parent component, home
      <UserInput data={data} />
    </div>
  );
}
