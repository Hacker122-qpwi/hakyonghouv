window.addEventListener('load', () => {
  document.querySelectorAll('.animate-onload').forEach(el => {
    el.classList.add('active');
  });
});
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const mainContent = document.getElementById('main-content');

  setTimeout(() => {
    preloader.classList.add('slide-up');

    preloader.addEventListener('transitionend', () => {
      preloader.style.display = 'none';
      mainContent.style.display = 'block';
    });
  }, 2000); 
});

const Box1 = document.getElementById("boxname1");
const Box2 = document.getElementById("boxname2");
const Box3 = document.getElementById("boxname3");
const Box4 = document.getElementById("boxname4");
const Box5 = document.getElementById("boxname5");

const member1 = {
    Name: "Horng Chanthea",
    Job: "Teacher",
    PhoneNumber: "061 239 994",
    Telegram: "061 239 994"
}
const member2 = {
    Name: "Heng Sochea",
    Job: "Teacher",
    PhoneNumber: "061 235 557",
    Telegram: "061 235 557"
}
const member3 = {
    Name: "Hak Yongchhay",
    Job: "Student",
    PhoneNumber: "012 915 984",
    Telegram: "012 915 984"
}
const member4 = {
    Name: "Hak Yonghouv",
    Job: "-",
    PhoneNumber: "011 284 645",
    Telegram: "011 284 645"
}
const member5 = {
    Name: "Hak Yongchhing",
    Job: "student",
    PhoneNumber: "095 862 587",
    Telegram: "095 862 587"
}



function closes() {
    Box1.style.display = 'none';
    Box2.style.display = 'none';
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    Box5.style.display = 'none';
}

const boxs1 = () => {
    Box1.style.display = 'flex';
    Box2.style.display = 'none';
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    Box5.style.display = 'none';
    console.table(member1);
};
const boxs2 = () => {
    Box1.style.display = 'none';
    Box2.style.display = 'flex';
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    Box5.style.display = 'none';
    console.table(member2);
};
const boxs3 = () => {
    Box1.style.display = 'none';
    Box2.style.display = 'none';
    Box3.style.display = 'flex';
    Box4.style.display = 'none';
    Box5.style.display = 'none';
    console.table(member3);
}
const boxs4 = () => {
    Box1.style.display = 'none';
    Box2.style.display = 'none';
    Box3.style.display = 'none';
    Box4.style.display = 'flex';
    Box5.style.display = 'none';
    console.table(member4);
}
const boxs5 = () => {
    Box1.style.display = 'none';
    Box2.style.display = 'none';
    Box3.style.display = 'none';
    Box4.style.display = 'none';
    Box5.style.display = 'flex';
    console.table(member5);
}