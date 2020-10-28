function main() {
  return new Promise((resolve, reject) => {
    const stdin = process.openStdin();
    stdin.addListener("data", (value) => {
      return resolve(value);
    });
  });
}

main().then((resultado) => {
  console.log("Resultado: ", resultado.toString());
});
