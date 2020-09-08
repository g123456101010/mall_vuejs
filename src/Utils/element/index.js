// 导入自己需要的element组件
import {
    Button,
    Loading,
    Message,
    Input,
    Container,
    Header,
    Main,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    MessageBox,
    Card,
    Select,
    Option,
    OptionGroup,
} from 'element-ui'
const element = {
    install: function(Vue) {
        Vue.use(Button)
        Vue.use(Loading)
        Vue.use(Message.name, Message)
        Vue.prototype.$message = Message
        Vue.use(Input)
        Vue.use(Container);
        Vue.use(Header);
        Vue.use(Main);
        Vue.use(Dropdown);
        Vue.use(DropdownMenu);
        Vue.use(DropdownItem);
        Vue.use(Card);
        Vue.use(Select);
        Vue.use(Option);
        Vue.use(OptionGroup);

        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$prompt = MessageBox.prompt;
    }
}
export default element