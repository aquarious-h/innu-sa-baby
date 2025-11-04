(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    3311: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => P });
      var i = a(5155),
        s = a(2115),
        o = a(1733);
      function n({ className: e = "", children: t, ...a }) {
        return (0, i.jsx)("button", {
          ...a,
          className: [
            "px-6 py-2 rounded-[14px] shadow-md font-medium uppercase cursor-pointer transition flex items-center gap-2 text-white md:text-lg disabled:cursor-not-allowed disabled:opacity-50",
            e,
          ].join(" "),
          style: { filter: "drop-shadow(0 3px 5px rgba(0,0,0, 0.5))" },
          children: t,
        });
      }
      let l = [
          "I’ll always listen — not just to your words, but to the quiet things your heart is trying to say.",
          "I’ll never stop caring, no matter how hard the days get or how far life takes us.",
          "I’ll keep choosing you, over and over again, in every moment and in every version of forever.",
          "I’ll stand beside you through every storm, every silence, every sunrise — because you’re my constant.",
        ],
        r = [
          "./images/1.jpg",
          "./images/2.jpg",
          "./images/3.jpg",
          "./images/4.jpg",
          "./images/5.jpg",
          "./images/6.jpg",
          "./images/7.jpg",
        ],
        d = `Every moment with you feels like a small piece of forever — a quiet reminder that love doesn’t always need grand gestures; sometimes, it’s just the way your hand fits mine, or the way we laugh at things no one else would ever understand.

We’ve built something real — a story written in late-night talks, shared dreams, and the comfort of knowing we can simply be ourselves. We’ve seen each other grow, stumble, and rise again, and through it all, we’ve stayed side by side.

This is only the beginning of everything we’re yet to be. No matter where life leads us, I’ll carry these moments with me — every laugh, every silence, every look that said more than words ever could.

You are not just my present; you are the heartbeat of my future — the reason every tomorrow feels like something worth waiting for. I love you Forever Meri Dharampatni.. Always💕🫂🫂💋`;
      function c({ onStart: e }) {
        return (0, i.jsxs)(o.P.div, {
          className:
            "bg-rose-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 max-w-sm w-full text-center place-items-center relative overflow-hidden",
          style: { boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" },
          children: [
            (0, i.jsx)("div", {
              className:
                "absolute bg-white/90 bottom-0 w-116 h-[55%] rounded-t-[50%] -z-1",
            }),
            (0, i.jsx)(o.P.img, {
              src: "./gifs/first.gif",
              alt: "cute",
              className: "mx-auto h-32 md:h-36 mb-4 md:mb-6 drop-shadow-md",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.1, duration: 0.5 },
            }),
            (0, i.jsx)(o.P.h1, {
              className:
                "text-[26px] md:text-3xl font-semibold text-rose-500 leading-tight",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3, duration: 0.5 },
              children: "Our Future Together",
            }),
            (0, i.jsx)(o.P.p, {
              className: "mt-3 text-sm md:text-base max-h-20 overflow-y-auto",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.5 },
              children:
                "A little glimpse of the life we're creating together...",
            }),
            (0, i.jsx)(o.P.div, {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.75, duration: 0.5 },
              children: (0, i.jsx)(n, {
                onClick: e,
                className: "mt-6 bg-rose-500 hover:bg-rose-500/80",
                children: "Start",
              }),
            }),
          ],
        });
      }
      var m = a(6497);
      function x({ shouldPlay: e }) {
        let t = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            e &&
              t.current &&
              ((t.current.volume = 0.7), t.current.play().catch(console.log));
          }, [e]),
          (0, i.jsx)("audio", {
            ref: t,
            loop: !0,
            preload: "auto",
            children: (0, i.jsx)("source", {
              src: "./audio/bg.mp3",
              type: "audio/mpeg",
            }),
          })
        );
      }
      function p() {
        return (0, i.jsxs)(o.P.div, {
          className:
            "bg-violet-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 max-w-sm w-full text-center place-items-center relative overflow-hidden h-[350px] md:h-[386px]",
          style: { boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" },
          children: [
            (0, i.jsx)("div", {
              className:
                "absolute bg-white/90 bottom-0 w-116 h-[51%] rounded-t-[50%] -z-1",
            }),
            (0, i.jsx)(o.P.img, {
              src: "./gifs/second.gif",
              alt: "our beginning",
              className: "mx-auto h-32 md:h-36 mb-6 drop-shadow-md",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.1, duration: 0.5 },
            }),
            (0, i.jsx)(o.P.h1, {
              className:
                "text-[26px] md:text-3xl font-semibold text-violet-500 leading-tight",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3, duration: 0.5 },
              children: "How It All Started",
            }),
            (0, i.jsx)(o.P.p, {
              className:
                "mt-3 text-sm md:text-base max-h-20 md:max-h-24 overflow-y-auto",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.5 },
              children:
                "It all began with a single 'yk what that text was😅' a quiet spark in the digital void that ignited something eternal smth deep. From those first random chats—tentative words exchanged in the glow of screens—we've woven a bond that transcends time, sharing whispers of dreams, vulnerabilities, insecqurites, and joys that feel like soul-deep promises. No laughter alone defines us, but the profound pull of unspoken understanding, the ache of distance bridged by every message, evey voicenote and every word, and this is the start of a lifetime intertwined, for forever.",
            }),
          ],
        });
      }
      function h() {
        return (0, i.jsxs)(o.P.div, {
          className:
            "bg-fuchsia-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 max-w-sm w-full text-center place-items-center relative overflow-hidden h-[350px] md:h-[386px]",
          style: { boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" },
          children: [
            (0, i.jsx)("div", {
              className:
                "absolute bg-white/90 bottom-0 w-116 h-[51%] rounded-t-[50%] -z-1",
            }),
            (0, i.jsx)(o.P.img, {
              src: "./gifs/third.gif",
              alt: "cute fight",
              className: "mx-auto h-32 md:h-36 mb-6 drop-shadow-md scale-95",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.1, duration: 0.5 },
            }),
            (0, i.jsx)(o.P.h1, {
              className:
                "text-[26px] md:text-3xl font-semibold text-fuchsia-500 leading-tight",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3, duration: 0.5 },
              children: "How It’s Going",
            }),
            (0, i.jsx)(o.P.p, {
              className:
                "mt-3 text-sm md:text-base max-h-20 md:max-h-24 overflow-y-auto",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.5 },
              children:
                "We fight sometimes — not because we want to hurt each other, but because we care enough to feel deeply. There are moments when words come out sharper than we mean, when silence stretches too long, and pride builds walls we don’t know how to climb. Yet somehow, no matter how far apart we drift, we always find our way back. Because this bond — what we’ve built between us — has always been stronger than any argument, louder than any silence, and softer than any apology. It’s not perfect, but it’s real, and it always leads us home to each other.",
            }),
          ],
        });
      }
      function u() {
        return (0, i.jsx)("div", {
          className: "max-w-sm w-[91vw]",
          children: (0, i.jsxs)(o.P.div, {
            className:
              "bg-indigo-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 w-full text-center place-items-center relative overflow-hidden h-[350px] md:h-[386px]",
            style: { boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" },
            children: [
              (0, i.jsx)("div", {
                className:
                  "absolute bg-white/90 bottom-0 w-116 h-[51%] rounded-t-[50%] -z-1",
              }),
              (0, i.jsx)(o.P.img, {
                src: "./gifs/fourth.gif",
                alt: "promise",
                className: "mx-auto h-32 md:h-36 mb-6 drop-shadow-md",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.1, duration: 0.5 },
              }),
              (0, i.jsx)(o.P.h1, {
                className:
                  "text-[26px] md:text-3xl font-semibold text-indigo-500 leading-tight",
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3, duration: 0.5 },
                children: "I Promise You",
              }),
              (0, i.jsx)("div", {
                className: "mt-3 max-h-20 md:max-h-24 overflow-y-auto",
                children: l.map((e, t) =>
                  (0, i.jsx)(
                    o.P.p,
                    {
                      className: "text-sm md:text-base",
                      initial: { opacity: 0, y: 13 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.6 + 0.3 * t, duration: 0.4 },
                      children: e,
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      }
      var y = a(4551),
        b = a(3978);
      function g() {
        return (0, i.jsx)("div", {
          className: "max-w-sm w-[91vw]",
          children: (0, i.jsxs)(o.P.div, {
            className:
              "bg-sky-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 max-w-sm w-full text-center place-items-center relative overflow-hidden h-[350px] md:h-[386px]",
            style: { boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" },
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: [
              (0, i.jsx)("div", {
                className:
                  "absolute bg-white bottom-0 w-116 h-[51%] rounded-t-[50%] -z-1",
              }),
              (0, i.jsx)(o.P.h1, {
                className:
                  "text-[26px] md:text-3xl font-semibold text-sky-500 mb-4 leading-tight",
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.2, duration: 0.5 },
                children: "You're my Pretty lil Princess👑💕",
              }),
              (0, i.jsx)(y.RC, {
                modules: [b._R, b.Ij, b.dK],
                effect: "fade",
                autoplay: { delay: 2e3, disableOnInteraction: !1 },
                pagination: { clickable: !0 },
                className: "w-full",
                children: r.map((e, t) =>
                  (0, i.jsx)(
                    y.qr,
                    {
                      children: (0, i.jsx)(o.P.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.5, delay: 0.5 },
                        className: "flex justify-center",
                        children: (0, i.jsx)("div", {
                          className:
                            "bg-white p-2 pb-10 h-60 md:h-66 w-44 md:w-48 rounded-2xl",
                          children: (0, i.jsx)("img", {
                            src: e,
                            alt: `Image ${t + 1}`,
                            className: "w-full h-full object-cover rounded-xl",
                            loading: "lazy",
                          }),
                        }),
                      }),
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      }
      function f() {
        let [e, t] = (0, s.useState)(!1);
        return (0, i.jsx)("div", {
          className: "max-w-sm w-screen",
          children: (0, i.jsxs)(o.P.div, {
            className:
              "bg-purple-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 max-w-sm text-center place-items-center relative overflow-hidden h-[350px] md:h-[386px] mx-4 sm:mx-0",
            style: { boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" },
            children: [
              (0, i.jsx)("div", {
                className:
                  "absolute bg-white bottom-0 w-116 h-[51%] rounded-t-[50%] -z-1",
              }),
              (0, i.jsx)(o.P.h1, {
                className:
                  "text-[26px] md:text-3xl font-semibold text-purple-500 mb-4 leading-tight",
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3, duration: 0.5 },
                children: "A Special Message",
              }),
              (0, i.jsx)(o.P.div, {
                className: "mt-3 bg-white rounded-[20px] p-2",
                onClick: () => t(!e),
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.5, duration: 0.5 },
                children: (0, i.jsxs)("div", {
                  className: `card w-[190px] h-[210px] md:w-[210px] md:h-[230px] ${
                    e ? "tapped" : ""
                  } will-change-auto`,
                  children: [
                    (0, i.jsx)("p", {
                      className:
                        "text-sm p-3 max-h-[80%] overflow-y-auto text-left",
                      children: d,
                    }),
                    (0, i.jsx)("div", {
                      className: "cover will-change-auto",
                      children: (0, i.jsx)("img", {
                        src: "./gifs/tap-here.gif",
                        className: "w-40",
                        alt: "tap here",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      a(4062), a(878), a(8068);
      var w = a(368),
        v = a(7937);
      function j({ onPrev: e, onNext: t, disabledPrev: a, disableNext: s }) {
        return (0, i.jsxs)(o.P.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0, transition: { delay: 1 } },
          exit: { opacity: 0, y: 20 },
          transition: { duration: 0.5 },
          className: "flex items-center justify-center gap-8 mt-7",
          children: [
            (0, i.jsx)(n, {
              onClick: e,
              disabled: a,
              className:
                "bg-linear-to-r from-pink-400 to-rose-400 hover:opacity-90 px-4! py-2!",
              children: (0, i.jsx)(w.A, { className: "text-white" }),
            }),
            (0, i.jsx)(n, {
              onClick: t,
              disabled: s,
              className:
                "bg-linear-to-r from-violet-400 to-indigo-400 hover:opacity-90 px-4! py-2!",
              children: (0, i.jsx)(v.A, { className: "text-white" }),
            }),
          ],
        });
      }
      function N({ onRestart: e }) {
        return (0, i.jsxs)(o.P.div, {
          className:
            "bg-pink-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 max-w-sm w-full text-center place-items-center relative overflow-hidden",
          style: { boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" },
          children: [
            (0, i.jsx)("div", {
              className:
                "absolute bg-white/90 bottom-0 w-116 h-[55%] rounded-t-[50%] -z-1",
            }),
            (0, i.jsx)(o.P.img, {
              src: "./gifs/final.gif",
              alt: "thank you",
              className: "mx-auto h-32 md:h-36 mb-4 md:mb-6 drop-shadow-md",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.1, duration: 0.5 },
            }),
            (0, i.jsx)(o.P.h1, {
              className:
                "text-[26px] md:text-3xl font-semibold text-pink-500 leading-tight",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3, duration: 0.5 },
              children: "You're My Home, Meri Ardhangni👸",
            }),
            (0, i.jsx)(o.P.p, {
              className:
                "mt-3 text-sm md:text-base text-gray-700 max-h-20 overflow-y-auto",
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6, duration: 0.5 },
              children:
                "Every ordinary moment—coffee cooling, rain tapping the window, a quiet Sunday—turns into something sacred the second you’re part of it. You don’t just show up; you make the world feel like it’s been waiting for you. I never knew home could be a voice on the other end of a call, a laugh in a text, the way you say my name like it belongs to you. I’m not lucky to have you—I’m grateful, every single day, for the way you make life feel like it’s always just beginning.",
            }),
            (0, i.jsx)(o.P.div, {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.75, duration: 0.5 },
              children: (0, i.jsx)(n, {
                onClick: e,
                className: "mt-6 bg-pink-500 hover:bg-pink-500/80",
                children: "Replay",
              }),
            }),
          ],
        });
      }
      function P() {
        let [e, t] = (0, s.useState)(0),
          [a, n] = (0, s.useState)(!1),
          [l, r] = (0, s.useState)(!1),
          d = [
            (0, i.jsx)(
              c,
              {
                onStart: function () {
                  n(!0),
                    t(1),
                    setTimeout(() => {
                      r(!0);
                    }, 600);
                },
              },
              "cover"
            ),
            (0, i.jsx)(p, {}, "started"),
            (0, i.jsx)(h, {}, "present"),
            (0, i.jsx)(u, {}, "present"),
            (0, i.jsx)(g, {}, "photos"),
            (0, i.jsx)(f, {}, "message"),
            (0, i.jsx)(N, { onRestart: () => t(0) }, "final"),
          ],
          y = d.length - 1;
        return (
          (0, s.useEffect)(() => {
            e === y && r(!1);
          }, [e]),
          (0, i.jsxs)("main", {
            className:
              "min-h-screen flex items-center justify-center bg-linear-to-b from-orange-100 to-rose-100 relative overflow-hidden",
            children: [
              (0, i.jsx)("div", {
                className: "circuit-background pointer-events-none",
              }),
              (0, i.jsx)(x, { shouldPlay: a }),
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center px-4 py-8",
                children: [
                  (0, i.jsx)(m.N, {
                    mode: "wait",
                    children: (0, i.jsx)(
                      o.P.div,
                      {
                        initial: { opacity: 0, x: 80, scale: 0.9 },
                        animate: { opacity: 1, x: 0, scale: 1 },
                        transition: { duration: 0.6, ease: "easeOut" },
                        exit: { opacity: 0, x: -80 },
                        children: d[e],
                      },
                      e
                    ),
                  }),
                  (0, i.jsx)(m.N, {
                    mode: "wait",
                    children:
                      l &&
                      (0, i.jsx)(
                        j,
                        {
                          onPrev: function () {
                            e > 0 && t(e - 1);
                          },
                          onNext: function () {
                            e < y && t(e + 1);
                          },
                          disabledPrev: 1 === e,
                          disableNext: e === y,
                        },
                        "navigation"
                      ),
                  }),
                ],
              }),
              (0, i.jsx)(o.P.div, {
                initial: { x: 100, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { duration: 1, delay: 0.5 },
                className:
                  "fixed bottom-4 right-4 text-sm text-black/40 pointer-events-none z-50 font-light",
                children: " ",
              }),
            ],
          })
        );
      }
    },
    6509: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 3311));
    },
  },
  (e) => {
    e.O(0, [539, 912, 441, 512, 358], () => e((e.s = 6509))), (_N_E = e.O());
  },
]);
