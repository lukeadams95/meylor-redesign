/**
 * Google Translate wraps text in <font> tags, so React can later fail to
 * remove or insert nodes ("Failed to execute 'removeChild' on 'Node'") when
 * the page changes. Make those two DOM calls tolerant of that.
 */
export function installTranslateGuard() {
  const proto = Node.prototype;
  const removeChild = proto.removeChild;
  proto.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) {
      child.parentNode?.removeChild(child);
      return child;
    }
    return removeChild.call(this, child) as T;
  };
  const insertBefore = proto.insertBefore;
  proto.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return insertBefore.call(this, node, null) as T;
    return insertBefore.call(this, node, ref) as T;
  };
}
