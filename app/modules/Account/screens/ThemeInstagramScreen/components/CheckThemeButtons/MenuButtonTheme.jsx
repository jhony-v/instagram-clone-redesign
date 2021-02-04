import { forwardRef } from "react";
import { useStyletron } from "styletron-react";
import { BsCheck } from 'react-icons/bs';

const MenuButtonTheme = forwardRef(({ variant, text, name, checked, onClick }, ref) => {
    const [css] = useStyletron();

    const variants = {
        default: {
            bg: "white",
            fg: "black",
            bgBorder: "rgb(220,220,220)"
        },
        dim: {
            bg: "rgba(21,32,43,1.00)",
            fg: "white",
            bgBorder: "rgb(57, 61, 64)"
        },
        lightsOut: {
            bg: "black",
            fg: "white",
            bgBorder: "rgb(60,60,60)"
        }
    }

    return (
       <div

            onClick={onClick}
            className={css({
                backgroundColor: variants[variant].bg,
                color: variants[variant].fg,
                border: `2px solid ${variants[variant].bgBorder}`,
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "20px",
                transition:".3s",
                cursor:"pointer",
                fontWeight: "bold",
                ...checked && {
                    border: "2px solid var(--itg-app-secondary-color)"
                }
            })}
        >
          <div className={css({
                width: "22px",
                height: "22px",
                borderRadius: "100%",
                border: `2px solid gray`,
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                transition:".3s",
                justifyContent: "center",
                ...checked && {
                    border: "none",
                    backgroundColor: "var(--itg-app-secondary-color)",
                    color: "white",
                }
            })}>
             {checked && <BsCheck size={17} />}
          </div>
          <input ref={ref} name={name} type="radio" className={css({ display: "none" })} defaultChecked={checked} />
          {text}
       </div>
    )
})


export default MenuButtonTheme;