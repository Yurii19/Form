<?php 
require_once('components/startsession.php');
require_once('components/head.php');
require_once('components/leftsidesection.php');
?>
<section class="section-right"  id="section-users-data">
  <form class="" action="handler.php" method="post">
    <div class="head">GAME OF THRONES
    </div>
    <div class="join-report">You've successfully joined the game. Tell us more about yourself.
    </div>
    <div class="box">
      <label class="box_label" for="name_input">Who are you?
      </label>
      <span class="box_tip">Alpha-numeric username
      </span>
      <input class="box_email box_core" id="name_input" name="username" type="text" placeholder="arya" value=
      "<?php if (isset($_SESSION['user_name'])) echo $_SESSION['user_name']; unset($_SESSION['user_name']); ?>">
      <?php 
      if (isset($_SESSION['error_name'])) {
        echo '<div class="error-php">'.$_SESSION['error_name'].'</div>';
        unset($_SESSION['error_name']);
         }
       ?>
      <hr>
    </div>
    <div class="box">
      <label class="box_label" for="select">Your Great House
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
       <?php 
      if (isset($_SESSION['error_select'])) {
        echo '<div class="error-php">'.$_SESSION['error_select'].'</div>';
        unset($_SESSION['error_select']);
         }
       ?>
      <hr>
    </div>
    <div class="box">
      <label class="box_label" for="textarea">Your preferences, hobbies, wishes, etc.
      </label>
      <textarea class="box_textarea box_core" id="textarea" name="textinfo" rows="2" cols="80" placeholder="I have a long TOKILL list..."><?php if (isset($_SESSION['user_info']))
       echo $_SESSION['user_info']; unset($_SESSION['user_info']); ?></textarea>
      <?php 
      if (isset($_SESSION['error_info'])) {
        echo '<div class="error-php">'.$_SESSION['error_info'].'</div>';
        unset($_SESSION['error_info']);
         }
       ?>
      <hr>
    </div>
    <input class="button" type="submit" name="submitsave" value="Save">
  </form>
</section>
<?php 
require_once('components/footer.php');
?>     