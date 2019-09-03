<div class="box">
	<label class="box_label" for="password">Choose secure password
	</label>
	<span class="box_tip">Must be at least 8 characters
	</span>
	<input class="box_password box_core" type="password" name="password" value="" id="box_password" placeholder="password">
	<?php 
	if (isset($_SESSION['error_pasword'])) {
		echo '<div class="error-php">'.$_SESSION['error_pasword'].'</div>';
		unset($_SESSION['error_pasword']);
	}
	?>
	<hr>
</div>