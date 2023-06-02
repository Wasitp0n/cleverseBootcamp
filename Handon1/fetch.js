const getCourses = async () => {
  try {
    const response = await fetch("https://api.minireg.thanayut.in.th/courses");

    const data = await response.json();
    //console.log(data)
    data.courses.forEach((course) => {
      console.log(course);

      const para = document.createElement("p");
      para.innerHTML = `
      <h3>${course.courseNo}${course.abbrName}</h3>
        <h4>จำนวนหน่วยกิต</h4>
        <p>${course.credit} หน่วยกิต</p>
        <h4>วันที่เรียน</h4>
        <ul>
          <li>none</li>
        </ul>
        <h4>จำนวนที่นั่ง</h4>
        <p>300/300</p>.......`;
      document.getElementById("myD IV").appendChild(para);
    });
  } catch (err) {
    console.log(err);
  }
};
getCourses();
