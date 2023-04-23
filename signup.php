 <?php

$con=mysqli_connect("localhost","root","","osdc");
if(isset($_post['submit']))
{
$name=$_POST["name"];
$email=$_POST["emailId"];
$mobno=$_POST["MobileNum"];
$password=$_POST["password"];
$cpassword=$_POST["confirmpassword"];
}
if(!$con)
{
    echo"error";
    die("failed".mysqli_connect_error());
}
else
{
    $sql="INSERT INTO signup(name,email,mobno,password,cpassword)
    values(name,email,mobno,password,cpassword)";

    if(!mysqli_query($con,$sql))
    {die("error".mysqli_error());
    }
    echo"record added";
}
mysqli_close($con);
?> 






<!--
<?php
//require "includes/common.php";
$con=mysqli_connect("localhost","root","","osdc");
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
session_start();

$email = $_POST['emailId'];
$email = mysqli_real_escape_string($con, $email);

$password = $_POST['password'];
$password = mysqli_real_escape_string($con, $password);
$password = md5($password);

$cpassword = $_POST['confirmpassword'];
$cpassword = mysqli_real_escape_string($con, $cpassword);
$cpassword = md5($cpassword);

$name = $_POST['name'];
$name = mysqli_real_escape_string($con, $name);

$mobno=$_POST['MobileNum'];
$mobno= mysqli_real_escape_string($con, $mobno);


//$last = $_POST['lastName'];
//$last = mysqli_real_escape_string($con, $last);

$query = "SELECT * from signup where email='$email'";
$result = mysqli_query($con, $query);
$num = mysqli_num_rows($result);
if ($num != 0) {

    $m = "Email Already Exists";
    header('location: index.php?error=' . $m);

} else {
    $quer = "INSERT INTO signup(email,name,password,cpassword,mobno) values('$email','$name','$password','$cpassword','$mobno')";
    mysqli_query($con, $quer);

   /* echo "New record has id: " . mysqli_insert_id($con);
    $user_id = mysqli_insert_id($con);
    $_SESSION['email'] = $email;
    $_SESSION['user_id'] = $user_id;*/
    //header('location:products.php');
}
?>-->
