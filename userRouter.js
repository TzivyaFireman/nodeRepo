const router = express.Router();
const userController = require('/userController');



router.post('addUser', productController.addProduct);
router.put('updateUser/:id', userController.updateUser);
router.get('getUser/:id', userController.getUser);
router.delete('delete/:id', userController.deleteUser);

module.exports = router;

