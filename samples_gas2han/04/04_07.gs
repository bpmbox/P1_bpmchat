function myFunction04_07_01() { 
  const points = {Japanese: 85, Math: 70, English: 60};
  for (const subject in points) {
    console.log(`${subject}の点数: ${points[subject]}`);
  }
}