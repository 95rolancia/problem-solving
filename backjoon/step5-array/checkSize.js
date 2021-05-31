let i = 0;
function inc() {
  i++;
  inc();
}

try {
  inc();
} catch (e) {
  i++;
  console.log("Maximum stack size is", i, "in your current browser");
}
