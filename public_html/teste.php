<?php
// PHP Data Objects(PDO) Sample Code:


/*
try {
    $conn = new PDO("sqlsrv:server = tcp:bios.database.windows.net,1433; Database = BIOSInf", "usrBIOS", "@p!3ado3");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e) {
    print("Error connecting to SQL Server.");
    die(print_r($e));
}

// SQL Server Extension Sample Code:
$connectionInfo = array("UID" => "usrBIOS", "pwd" => "@p!3ado3", "Database" => "BIOSInf", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:bios.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo);
*/
?>


<?php
    phpinfo();
?>