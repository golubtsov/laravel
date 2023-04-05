<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Actions\Admin\InfoSiteAction;
class InfoSiteController extends Controller
{
    public function __invoke(InfoSiteAction $infoSite)
    {
        return $infoSite->__invoke();
    }
}
