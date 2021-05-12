class Foo {
  // privateフィールド
  #privateField = 1;

  // publicフィールド
  publicField = 2;

  // static な privateフィールド
  static #staticPrivateField = 3;

  // static な publicフィールド
  static staticPublicField = 4;

  // コンストラクタ
  constructor(parameter) {
    // コンストラクタの中でもフィールドを初期化できる
    this.fieldInitializedInConstructor = parameter;
    console.log("Foo constructor");
  }

  // private な setter
  get #computed() {
    return this.publicField * 2;
  }

  // public な getter
  get computed() {
    return this.#computed;
  }

  // private な setter
  set #computed(value) {
    this.publicField = value / 2;
  }

  // public な setter
  set computed(value) {
    this.#computed = value;
  }

  // private メソッド
  #privateMethod() {
    return this.#privateField;
  }

  // public メソッド
  publicMethod() {
    return this.#privateField;
  }

  // static な privateメソッド
  static #staticPrivateMethod() {
    return this.#privateField;
  }

  // static な publicメソッド
  static staticPublicMethod() {
    return this.#staticPrivateField;
  }
}

class Bar extends Foo {
  constructor(parameter) {
    // サブクラスのコンストラクタでは、thisにアクセスする前に
    // 親クラスのコンストラクタを実行しなければならない
    super(parameter);
    this.subClassPublicField = 100;
    console.log("Bar constructor");
  }
  // 親クラスのメソッドのオーバーライド
  publicMethod() {
    return super.publicMethod() * this.subClassPublicField;
  }
}
