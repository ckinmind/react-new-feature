## Point Events
- 在web页面复用在多种设备下的情况下， Pointer Events整合了mouse, touch, pen的触摸事件， 使其能在多种设备上触发，我们无需对各种类型的事件区分对待，更高的提高了开发效率， 但是目前浏览器的支持条件不容乐观
- 在 PC 时代，我们通过鼠标与屏幕交互，这时候，我们设计系统时只需要考虑鼠标事件就好了。但是如今，有很多新的设备，比如智能手机，平板电脑，他们包含了其他的输入方式，比如触摸，手写笔，官方也为这些输入形式都提供了新的事件
- 但是对于开发者来说，这是件很麻烦的事，因为这意味着你需要为你的网页适配各种事件，比如你要根据用户的移动来画图，你需要兼容 PC 和手机
- 为了解决这一系列的问题，W3C 定义了一种新的输入形式，即 pointer。任何由鼠标、触摸、手写笔或者其他输入设备在屏幕上触发的接触，都算是 pointer 事件
- 它的 API 和鼠标事件很像，非常容易迁移。除了提供鼠标事件常用的属性，比如 clientX，target 等等，还提供了一些用于其他输入设备的属性，比如压力，接触面，倾斜角度等等，这样开发者就可以利用 pointer 事件为所有的输入设备开发自己的功能了
- pointer 事件与已知的事件类型基本一致，但是有一点区别：在触摸屏上，我们可能会滑动屏幕来触发页面滚动，缩放或者刷新，对于 touch 事件，这时会触发 touchmove，但是对于 pointer 事件，当触发这些浏览器行为时，你却会接收到 pointercancel 事件以便于通知你浏览器已经接管了你的指针事件
- pointer 事件的支持程度已经很不错了，你可以使用 Pointer Events polyfill来进行兼容

#### React提供了以下api来支持pointer events
- **API**
  - onPointerDown
  - onPointerMove
  - onPointerUp
  - onPointerCancel
  - onGotPointerCapture
  - onLostPointerCapture
  - onPointerEnter
  - onPointerLeave
  - onPointerOver
  - onPointerOut
- 需要注意的是， 上述api只在支持pointer events的浏览器中使用， react官方推荐当你在使用这个特性的时候， 使用第三方polyfill保证其兼容性
