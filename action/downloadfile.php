<?php  
if(isset($_POST['data'])){
    $data = $conn->quote($_POST['data']);
    $sql1 = $conn->prepare("SELECT * FROM files WHERE file_id=$data");
    $sql1->execute();
    $files = $sql1->fetch();
    $file = 'files/download/'.$files['filename'].".".$files['extention'];

    $title = $conn->quote($_POST['title']);
    $name = $conn->quote($_POST['name']);
    $jobtitle = $conn->quote($_POST['jobtitle']);
    $company = $conn->quote($_POST['company']);
    $industry = $conn->quote($_POST['industry']);
    $email = $conn->quote($_POST['email']);
    $phonenumber = $conn->quote($_POST['phonenumber']);
    $address = $conn->quote($_POST['address']);

    if(file_exists($file)){
        set_time_limit(0);

        $sql2 = $conn->prepare("INSERT INTO download_report VALUES('', $title, $name, $jobtitle, $company, $industry, $email, $phonenumber, $address)");
        $sql2->execute();

        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="'.basename($file).'"');
        header('Content-Transfer-Encoding: binary');
        header('Connection: Keep-Alive');
        header('Expires: 0');
        header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
        header('Pragma: public');
        header('Content-Length: '.sprintf("%u", filesize($file)));
        ob_clean();
        flush();
        readfile($file);
    }
}
?>
<!-- <meta http-equiv='refresh' content='0;url=http://localhost/presisi_company_profile/'> -->