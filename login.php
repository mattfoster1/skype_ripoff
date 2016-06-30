<?PHP
require_once("./include/membersite_config.php");
 
if(!$fgmembersite->CheckLogin())
{
    $fgmembersite->RedirectToURL("login.php");
    exit;
}
?>
<!-- See the file: access-controlled.php in the downloaded code for an example. -->



