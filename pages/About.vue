<template>
    <v-container class="py-12">
      <div ref="resumeContent">
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="pa-4 elevation-3">
            <v-avatar size="100" class="mb-4">
              <v-img src="/avatar.jpg" alt="Jeremiah Chukwuebuka Okpala" />
            </v-avatar>
            <h2 class="text-h5 font-weight-bold">Jeremiah Chukwuebuka Okpala</h2>
            <p class="text-subtitle-1">Full Stack Software Developer | Digital Marketer | Graphic Designer</p>
            <v-list dense class="mt-4">
              <v-list-item><v-icon class="mr-2">mdi-map-marker</v-icon>Lagos, Nigeria</v-list-item>
              <v-list-item><v-icon class="mr-2">mdi-email</v-icon>jeremiahchukwuebukao@gmail.com</v-list-item>
              <v-list-item><v-icon class="mr-2">mdi-phone</v-icon>+2348149481777</v-list-item>
              <v-list-item><v-icon class="mr-2">mdi-link</v-icon><a href="https://asastra-dev.vercel.app" target="_blank">Portfolio</a></v-list-item>
              <v-list-item><v-icon class="mr-2">mdi-linkedin</v-icon><a href="https://linkedin.com/in/jeremiah-okpala-5893a3168/" target="_blank">LinkedIn</a></v-list-item>
              <v-list-item><v-icon class="mr-2">mdi-github</v-icon><a href="https://github.com/JEREMIAHJPG/portfolio.git" target="_blank">GitHub</a></v-list-item>
            </v-list>
          </v-card>
        </v-col>
  
        <v-col cols="12" md="8">
          <v-card class="pa-6 elevation-2 mb-6">
            <h3 class="text-h6 font-weight-bold mb-2">Summary</h3>
            <p>
              Proactive and creative Full Stack Software Developer with over 3 years of coding experience, 4+ years in digital marketing, and 10+ years in graphic design.
              Adept at building scalable, secure, and SEO-optimized web applications using Vue.js, Nuxt 3, Firebase, and Node.js. Known for mentoring junior developers, managing large projects, and delivering high-performance solutions.
            </p>
          </v-card>
  
          <v-card class="pa-6 elevation-2 mb-6">
            <h3 class="text-h6 font-weight-bold mb-2">Technical Skills</h3>
            <ul>
              <li><strong>Languages & Frameworks:</strong> HTML5, CSS3, JavaScript (ES6+), Vue.js, Nuxt 3, Node.js, Python, MongoDB, MySQL, Firebase, Vuex, Pinia, Bootstrap, WordPress</li>
              <li><strong>Platforms & Tools:</strong> Vercel, Firebase Hosting, GitHub, GitHub Actions, VS Code, Postman, Google Analytics, Google AdSense, Paystack, Yoast SEO, SEMrush</li>
              <li><strong>Design & Analytics:</strong> Photoshop, CorelDraw, Canva, Tableau, Jupyter, Power BI</li>
              <li><strong>Systems & IT:</strong> Windows OS setup, monitoring, troubleshooting</li>
            </ul>
          </v-card>
  
          <v-card class="pa-6 elevation-2 mb-6">
            <h3 class="text-h6 font-weight-bold mb-2">Professional Experience</h3>
            <ul>
              <li><strong>Freelance Full-Stack Developer</strong> (Remote, Jan 2022 – Present)</li>
              <li><strong>Digital Marketing & Web Design Intern – UMS Solutions</strong> (Lagos, Aug – Dec 2023)</li>
              <li><strong>Freelance Graphic Designer</strong> (2012 – Present)</li>
            </ul>
          </v-card>
  
          <v-card class="pa-6 elevation-2 mb-6">
            <h3 class="text-h6 font-weight-bold mb-2">Projects</h3>
            <ul>
              <li><strong>ASASTRA – E-Commerce Web App:</strong> <a href="https://asastra.vercel.app" target="_blank">View Project</a></li>
              <li><strong>ASASTRA DEV – Portfolio Website:</strong> <a href="https://asastra-dev.vercel.app" target="_blank">View Project</a></li>
            </ul>
          </v-card>
  
          <v-card class="pa-6 elevation-2 mb-6">
            <h3 class="text-h6 font-weight-bold mb-2">Certifications & Learning</h3>
            <ul>
              <li>Full Stack Vue, Node & Nuxt.js – Net Ninja</li>
              <li>Firebase Fundamentals – Leela & Net Ninja</li>
              <li>Google Analytics for Beginners – Google</li>
              <li>Data Analytics & Visualization – Alex the Analyst</li>
              <li>Digital Marketing – UMS Solutions</li>
              <li>Project Management – Brigham Young University</li>
              <li>HTML, CSS, JavaScript – W3Schools</li>
              <li>Polymath Software Training – UNILAG</li>
            </ul>
          </v-card>
  
          <v-card class="pa-6 elevation-2 mb-6">
            <h3 class="text-h6 font-weight-bold mb-2">Academic Qualifications</h3>
            <ul>
              <li>B.Sc Industrial Chemistry – University of Lagos (2014 – 2019)</li>
              <li>NYSC – Hope Waddell Training Institution, Calabar (2021)</li>
              <li>SSCE – Tonia International College, Lagos (2007 – 2014)</li>
            </ul>
          </v-card>
  
          <v-card class="pa-6 elevation-2 mb-6">
            <h3 class="text-h6 font-weight-bold mb-2">Extracurricular Activities</h3>
            <ul>
              <li>Graduate Member – Student Chemical Society of Nigeria</li>
              <li>Alumni – University of Lagos</li>
              <li>Volunteer – Local Tech & Creative Community Trainer</li>
            </ul>
          </v-card>
  
          <v-card class="pa-6 elevation-2">
            <h3 class="text-h6 font-weight-bold mb-2">Referees</h3>
            <p>Available on request.</p>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-row md-2 m-4 class="downloadandsend" >
            <div style="text-align: center; align-items:center; justify-content: center;">
              <v-btn color="primary" class="ma-2" @click="generatePDF" :href="'/Jeremiah_Chukwuebuka_Resume.pdf'" rounded download><v-icon left small>download</v-icon>Download Resume</v-btn>
            </div>
     </v-row>
    </v-container>
  </template>
  
  <script>
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
  // Feel free to add props or state here if you want to make the data dynamic in the future
export default {
    name: 'About',
    data() {
      return {
        // Add any data properties you need here
      };
    },
    methods: {
      generatePDF() {
        // Logic to generate PDF if needed, or just use the link in the button
        const pdf = new jsPDF();
      const content = this.$refs.resumeContent;
      
      html2canvas(content).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
        pdf.save("Jeremiah-Chukwuebuka-Resume-CV.pdf");
      });
      }
    }
  };
  </script>
  
  <style scoped>

  a {
    color: #1976d2;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
  