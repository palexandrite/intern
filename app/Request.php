<?php

namespace app;

class Request
{
    public static function run()
    {
        $request = $_GET;
        
        echo '<pre>';
            var_dump($request);
            echo '</pre>';
            die();
        
//        if ($GLOBALS['config']['shortUrl']) {
//            
//        } else {
//            $pos = strpos($request, '?');
//            if ($pos) {
//                $params = substr($request, $pos + 1);
//                if ($params) {
//                    
//                }
//            }
//        }
    }
}
