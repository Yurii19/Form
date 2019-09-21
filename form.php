<?php 
require_once('components/startsession.php');
require_once('components/head.php');
echo '<body>';
require_once('components/leftsidesection.php');
?>
  <section class="section-right"  id="section-users-data">
    <form class="" action="" method="post">
      <div class="head">GAME OF THRONES
      </div>
      <div class="join-report">You've successfully joined the game. Tell us more about yourself.
      </div>
      <div class="box" id="name_box">
        <label class="box_label" for="name_input">Who are you?
        </label>
        <span class="box_tip" id="name_tip">Alpha-numeric username
        </span>
        <input class="box_email box_core" id="name_input" name="username" type="text" placeholder="arya" value="">
        <hr id="line_name">
      </div>
      <div class="box">
        <label class="box_label" id="house_select" for="select">Your Great House
        </label>
        <select class="box_select box_core" name="clanselect" id="select">
          <option class="option_select" value="option_select">Select House</option>
          <option class="option_select" value="0">House Arryn</option>
          <option class="option_select" value="1">House Baratheon </option>
          <option class="option_select" value="2">House Greyjoy</option>
          <option class="option_select" value="3">House Lannister</option>
          <option class="option_select" value="4">House Stark</option>
          <option class="option_select" value="5">House Targaryen</option>
        </select>
        <hr>
      </div>
      <div class="box">
        <label class="box_label" id="about_self" for="textarea">Your preferences, hobbies, wishes, etc.
        </label>
        <textarea class="box_textarea box_core" id="textarea" name="textinfo" rows="2" cols="80" placeholder="I have a long TOKILL list..."></textarea>
        <hr>
      </div>
      <input class="button" id="submit-save" type="submit" name="submitsave" value="Save">
    </form>
  </section>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script src="js/responsiveslides.min.js"></script>
  <script src="js/stb.dropdown.min.js"></script>
  <script src="js/ajax.js"></script>
  <script src="js/script.js"></script>
</body>
</html> 