<?php
namespace ChatApp;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class Chat implements MessageComponentInterface {
  protected $clients;

  public function __construct()
  {
    $this->clients = new \SplObjectStorage();
  }

  public function onOpen(ConnectionInterface $conn)
  {
    $this->clients->attach($conn);
    echo "new client connected\n";
  }

  public function onMessage(ConnectionInterface $conn, $data)
  {
    foreach ($this->clients as $client) {
      if ($client !== $conn) {
        $client->send($data);
      }
      //echo $data;
    }
  }

  public function onClose(ConnectionInterface $conn)
  {
    $this->clients->detach($conn);
    echo "client has disconnected\n";
  }

  public function onError(ConnectionInterface $conn, \Exception $e)
  {
    echo "An error has occurred: {$e->getMessage()}\n";
    $conn->close();
  }
}
?>
