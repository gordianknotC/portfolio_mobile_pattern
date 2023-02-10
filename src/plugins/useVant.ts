/** desktop 配置*/
import "@vant/touch-emulator";
import { Image as VanImage } from "vant/lib/image";
import iosSafeArea from "vue-ios-safe-area";

/** 有用到再加，可以減小專案大小*/
import {
  ActionSheet,
  Badge,
  Button,
  Cell,
  CellGroup,
  Col,
  Collapse,
  CollapseItem,
  CountDown,
  Dialog,
  Empty,
  Field,
  Grid,
  GridItem,
  Icon,
  Loading,
  NavBar,
  NumberKeyboard,
  Overlay,
  Pagination,
  PasswordInput,
  Popover,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Row,
  Swipe,
  SwipeItem,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  Toast,
  Uploader,
  ShareSheet,
  Checkbox,
  Form,
  ImagePreview
} from "vant";

export function useVant(app: any) {
  app.use(ActionSheet);
  app.use(Badge);
  app.use(Button);
  app.use(Cell);
  app.use(CellGroup);
  app.use(Col);
  app.use(Collapse);
  app.use(CollapseItem);
  app.use(CountDown);
  app.use(Dialog);
  app.use(Empty);
  app.use(Field);
  app.use(Grid);
  app.use(GridItem);
  app.use(Icon);
  app.use(iosSafeArea);
  app.use(Loading);
  app.use(NavBar);
  app.use(NumberKeyboard);
  app.use(Overlay);
  app.use(Pagination);
  app.use(PasswordInput);
  app.use(Popover);
  app.use(Popup);
  app.use(Progress);
  app.use(PullRefresh);
  app.use(Radio);
  app.use(RadioGroup);
  app.use(Row);
  app.use(Swipe);
  app.use(SwipeItem);
  app.use(Tab);
  app.use(Tabbar);
  app.use(TabbarItem);
  app.use(Tabs);
  app.use(Tag);
  app.use(Toast);
  app.use(Uploader);
  app.use(VanImage);
  app.use(ShareSheet);
  app.use(Checkbox);
  app.use(Form);
  app.use(ImagePreview);
}

Toast.allowMultiple();
