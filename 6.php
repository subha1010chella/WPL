<?php
// The argument inside $_POST is the name of the submit button
 if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit'])) {
 // 1.name of the server, 2. type of user 3. password, 4.name of DB
$conn= mysqli_connect('localhost', 'root', '', 'test1') or die("Connection Failed:" .mysqli_connect_error());
if(isset($_POST['name']) && isset($_POST['email']))
{
// Inside $_POST, give the name of the input field in test.php
$name= $_POST['name'];
$email= $_POST['email'];
// Enter details into DB

$sql= "INSERT INTO `formdeets` (`name`, `email`) VALUES ('$name', '$email')";
// Create a query to connect it
$query = mysqli_query($conn, $sql);
if($query) {
echo 'Entry Successful';
}
else {
echo 'Error';
}

}
?>
