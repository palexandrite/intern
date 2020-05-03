<?php

/**
 * Main Class of App
 *
 * @author Alexander Bulatov
 */
class App
{
    public static $classes;
    
    public static function autoload($className)
    {
        $className = ltrim($className, '\\');
        $fileName  = '';
        if ($lastNsPos = strrpos($className, '\\')) {
            $namespace = substr($className, 0, $lastNsPos);
            $className = substr($className, $lastNsPos + 1);
            $fileName  = str_replace('\\', DIRECTORY_SEPARATOR, strtolower($namespace)) . DIRECTORY_SEPARATOR;
        }
        $fileName .= str_replace('_', DIRECTORY_SEPARATOR, $className) . '.php';

        require_once ROOT . DIRECTORY_SEPARATOR . $fileName;
    }
}

spl_autoload_register(['App', 'autoload'], true, false);