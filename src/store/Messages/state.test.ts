import { renderHook, act } from "@testing-library/react-hooks";
import { useMessagesState } from "./state";

describe("useReportstFiltersReducer", () => {
  it("retrieves the default filter state", () => {
    const { result } = renderHook(() => useMessagesState());
    expect(result.current.messageReducer).toMatchObject({
      messages: [],
      format: "12H",
      sendingMethod: "keypress",
      isUnreadMessages: false,
      height: undefined
    });
  });

  it("Change user name", () => {
    const { result } = renderHook(() => useMessagesState());
    act(() => result.current.modifiers.setUsername("Lebron James"));
    expect(result.current.messageReducer.username).toEqual("Lebron James");
  });
  it("Sending messages", () => {
    const { result } = renderHook(() => useMessagesState());
    act(() =>
      result.current.modifiers.setMessage({
        from: "Yuri Ramos",
        message: "My first message in this app",
        date: 2321321
      })
    );
    expect(result.current.messageReducer.messages).toEqual([
      {
        from: "Yuri Ramos",
        message: "My first message in this app",
        date: 2321321
      }
    ]);
  });
  it("setUnreadMessage", () => {
    const { result } = renderHook(() => useMessagesState());
    act(() => result.current.modifiers.setUnreadMessage(true));
    expect(result.current.messageReducer.isUnreadMessages).toEqual(true);
  });

  it("setSendingMethod", () => {
    const { result } = renderHook(() => useMessagesState());
    act(() => result.current.modifiers.setSendingMethod("submit"));
    expect(result.current.messageReducer.sendingMethod).toEqual("submit");
  });

  it("setSendingMethod", () => {
    const { result } = renderHook(() => useMessagesState());
    act(() => result.current.modifiers.setTimeFormat("24H"));
    expect(result.current.messageReducer.format).toEqual("24H");
  });
  it("setDynamicHeight", () => {
    const { result } = renderHook(() => useMessagesState());
    act(() => result.current.modifiers.setDynamicHeight(700));
    expect(result.current.messageReducer.height).toEqual(700);
  });
});
