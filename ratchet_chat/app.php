<?php
require 'vendor/autoload.php';
require 'class/chatApp.php';

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use ChatApp\Chat;

$server = IoServer::factory(
  new HttpServer(
    new WsServer(
      new Chat()
      )
    ), 4321
);
echo "Listen on port 4321\n";
$server->run();
 ?>
