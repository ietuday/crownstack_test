import IReadController = require("../common/ReadController");
import IWriteController = require("../common/WriteController");
import IBaseBusiness = require("../../../app/business/interfaces/base");
interface BaseController<T extends IBaseBusiness<Object>> extends IReadController, IWriteController{
    
    
} 
export = BaseController;