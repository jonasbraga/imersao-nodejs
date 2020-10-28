const stdin = process.openStdin();
stdin.addListener("data", (value) => {
  console.log(`Você digitou: ${value.toString().trim()}.`);
});
