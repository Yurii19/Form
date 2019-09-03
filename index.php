<?php 
require_once('components/startsession.php');
require_once('components/head.php');
require_once('components/leftsidesection.php');
?>

<section class="section-right" id="sign-up-section">
  <form class="" name="sign" action="handler.php" method="post">
    <div class="head">GAME OF THRONES
    </div>
    <div class="box">
      <label class="box_label" for="email">Enter you email
      </label>
      <input class="box_email box_core" type="email" name="email" value="
      <?php if (isset($_SESSION['user_mail'])) echo $_SESSION['user_mail']; unset($_SESSION['user_mail']);  ?>" id="box_email" placeholder="arya@westeros.com">
      <?php 
      if (isset($_SESSION['error_mail'])) {
        echo '<div class="error-php">'.$_SESSION['error_mail'].'</div>';
        unset($_SESSION['error_mail']);
         }
       ?>
      <hr>
    </div>
    <?php 
    require_once('components/passwordblock.php');
    ?>     
    <div class="checkbox">
      <input class="checkbox_input box_core" type="checkbox" name="remember" value="" placeholder="">
      <label class="checkbox_label box_label" for="checkbox">Remember me
      </label>
    </div>
    <input class="button" type="submit" name="submitsign" value="Sign Up" id="sign_up">
  </form>
</section>
<?php 
require_once('components/footer.php');
?>     
