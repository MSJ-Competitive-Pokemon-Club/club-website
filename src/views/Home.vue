<script>
  import welcome_message from "/src/assets/text/home/welcome.txt?raw"

  export default {
    data() {
      return {
        welcome_message,
        image_loc: '/src/assets/images/logo_test.png',
        CPC_logo: '/src/assets/images/CPC_logo.png'
      }
    }
  }
</script>

<style>
  /* CSS Reset */
  h1, h2, h3, h4, h5, h6 {
    margin:0;
    padding:0;
  }

  .about_us {
    width:100%;
    height:700px;
    width:100%;
    height:600px;
    background-color:rgb(225, 220, 220);
    padding-top:200px;
    padding-bottom:200px;
  }

  .title {
    text-align:center;
    font-size:100px;
    padding:20px;
    background-color:firebrick;
  }

  .subtitle {
    font-size:70px;
    padding:20px;
  }

  .who_are_we {
    text-align:left;
    width:50%;
    padding-left:10px;
    line-height:1.5;
    margin-bottom:50px;
  }
  
  .about_text {
    font-size:20px;
    font-family:'Courier New';
    padding-left:20px;
    padding-right:50px;
    padding-bottom:20px;
  }

  .logo {
    width:35%;
    padding:10px;
    margin-top:20px;
    background-color:rgb(224, 219, 219);
  }

  .logo, .who_are_we {
    display: inline-block;
    vertical-align: top;
  }

  .room {
    padding-top:200px;
    padding-bottom:200px;
    background-color:rgb(41, 79, 79);
    width:100%;
    text-align:center;
    font-size:50px;
    color:rgb(212, 206, 206);
  }

  .room_subtext {
    font-size:45px;
    color:gray;
    font-family:Cambria;
  }

  .room_image {
    padding-top:200px;
  }

  .room_text, .room_image {
    display:inline-block;
    vertical-align:top;
    width:40%;
  }

  .social_media {
    padding-top:200px;
    padding-bottom:200px;
    color:rgb(41, 79, 79);
    width:100%;
    text-align:center;
    font-size:50px;
    background-color:rgb(41, 44, 131);
  }
  
  .social_media_text {
    padding:50px;
  }


</style>

<template>
  <div class="home">
    <h1 class="title"> MSJ Competitive Pokemon Club </h1>
    <div class="about_us">
      <img class="logo" :src="CPC_logo"><div class="who_are_we">
        <h2 class="subtitle"> Who Are We? </h2>
        <p class="about_text"> We are the MSJ Competitive Pokemon Club, an organization dedicated to the active study of competitive Pokemon. </p>
        <p class="about_text">Drop by to receive lectures from our finest Trainers and start your career as a Pokemon Trainer! </p>
        <p class="about_text"> We also hold tournaments with cash prizes!</p>
      </div>
    </div>
    <div class="room">
      <div class="room_text">
        <h1> Meeting Times: </h1>
        <br>
        <h2 class="room_subtext"> Tuesdays at B18 </h2>
        <h2 class="room_subtext"> Ms. Williams' Room </h2>
      </div><div class="room_image">
        <h5>(Insert Image Here)</h5>
      </div>
    </div>
    <div class="social_media">
      <h1>Here's our social media</h1>
      <h3 class="social_media_text"> (Discord) </h3>
      <h3 class="social_media_text"> (Facebook) </h3>
      <h4 class="social_media_text"> (Do we really need an Instagram) </h4>
    </div>

  </div>
</template>
