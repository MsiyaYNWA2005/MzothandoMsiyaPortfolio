window.onload=function(){
    document.getElementById("Home_section").style.display="block";
    document.getElementById("education").style.display="none";
    document.getElementById("about_me").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("skills_section").style.display="none";
    document.getElementById("Documents").style.display="none";
    document.getElementById("").style.display="none";
}

function HomePage(){
    document.getElementById("Home_section").style.display="block";
    document.getElementById("education").style.display="none";
    document.getElementById("about_me").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("skills_section").style.display="none";
    document.getElementById("Documents").style.display="none";
    document.getElementById("").style.display="none";
}

function EducationPage(){
    document.getElementById("Home_section").style.display="none";
    document.getElementById("education").style.display="block";
    document.getElementById("about_me").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("skills_section").style.display="none";
    document.getElementById("Documents").style.display="none";
    document.getElementById("").style.display="none";
}

function AboutPage(){  
    document.getElementById("Home_section").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("about_me").style.display="block";
    document.getElementById("contact").style.display="none";
    document.getElementById("skills_section").style.display="none";
    document.getElementById("Documents").style.display="none";
    document.getElementById("").style.display="none";
}

function ContactPage(){
    document.getElementById("Home_section").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("about_me").style.display="none";
    document.getElementById("contact").style.display="block";
    document.getElementById("skills_section").style.display="none";
    document.getElementById("Documents").style.display="none";
    document.getElementById("").style.display="none";
}

function SkillsPage(){
    document.getElementById("Home_section").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("about_me").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("skills_section").style.display="block";
    document.getElementById("Documents").style.display="none";
    document.getElementById("").style.display="none";
}

function DocumnetsPage(){
    document.getElementById("Home_section").style.display="none";
    document.getElementById("education").style.display="none";
    document.getElementById("about_me").style.display="none";
    document.getElementById("contact").style.display="none";
    document.getElementById("skills_section").style.display="none";
    document.getElementById("Documents").style.display="block";
    document.getElementById("").style.display="none";
}

function GoToGitHub(){
    const link = document.createElement("a");
    link.href="https://github.com/MsiyaYNWA2005";
    link.target="_blank";
    link.click();
}

function GoToEmail(){
    const link = document.createElement("a");
    link.href="mailto:sinothandomsiya212@gmail";
    link.target="_blank";
    link.click();
}

function GoToLinkend(){
    const link = document.createElement("a");
    link.href="https://www.linkedin.com/in/mzothando-msiya-21b267352?utm_source=share_via&utm_content=profile&utm_medium=member_android";
    link.target="_blank";
    link.click();
}
