// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function AnimatedText({ text, delay = 0 }) {
  return (
    <h1
      style={{
        fontWeight: 700,
        margin: "20px 0",
        display: "flex",
        justifyContent: "center",
        color: "white",
        fontSize: "2.5rem",
        textShadow: "0 2px 10px rgba(0,0,0,0.3)",
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: delay + i * 0.07,
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
}

function VectorAnimado() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        textAlign: "center",
        background: "#593c8f",
        padding: "20px",
      }}
    >
      <AnimatedText text="Bienvenidos" delay={2} />
      <svg
        width="113"
        height="140"
        viewBox="0 0 113 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: "20px 0" }}
      >
        {/* Stroke animado */}
        <motion.path
          d="M31.5965 0H19.626V18.3733H31.5965V0ZM80.7312 69.735C86.8556 69.735 89.5003 69.5959 92.2841 68.0647V0H80.7312V69.735ZM11.5529 30.0654H76.973C77.669 30.0654 78.5041 30.2046 79.3393 30.2046V19.9044H0V124.159H11.5529V81.7055H18.2341V71.4053H11.5529V30.0654ZM93.9544 21.7139V33.406C98.5477 36.329 100.636 41.6183 100.636 50.6658C100.636 60.8268 98.2693 66.9512 92.5625 69.5958C90.1962 70.7094 87.4124 70.9878 80.8704 71.127L32.9884 71.4053V81.7055H80.592C85.6029 81.7055 88.3867 81.8447 92.5625 80.8704C101.332 78.7825 112.606 71.5445 112.606 50.5266C112.606 33.8236 105.09 25.1937 93.9544 21.7139ZM19.626 139.192H31.5965V31.4573H19.626V139.192ZM80.7312 82.9583V139.192H92.2841V82.2623C89.6394 82.9582 85.8813 82.9583 80.7312 82.9583Z"
          fill="transparent"
          stroke="white"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        {/* Fill animado */}
        <motion.path
          d="M31.5965 0H19.626V18.3733H31.5965V0ZM80.7312 69.735C86.8556 69.735 89.5003 69.5959 92.2841 68.0647V0H80.7312V69.735ZM11.5529 30.0654H76.973C77.669 30.0654 78.5041 30.2046 79.3393 30.2046V19.9044H0V124.159H11.5529V81.7055H18.2341V71.4053H11.5529V30.0654ZM93.9544 21.7139V33.406C98.5477 36.329 100.636 41.6183 100.636 50.6658C100.636 60.8268 98.2693 66.9512 92.5625 69.5958C90.1962 70.7094 87.4124 70.9878 80.8704 71.127L32.9884 71.4053V81.7055H80.592C85.6029 81.7055 88.3867 81.8447 92.5625 80.8704C101.332 78.7825 112.606 71.5445 112.606 50.5266C112.606 33.8236 105.09 25.1937 93.9544 21.7139ZM19.626 139.192H31.5965V31.4573H19.626V139.192ZM80.7312 82.9583V139.192H92.2841V82.2623C89.6394 82.9582 85.8813 82.9583 80.7312 82.9583Z"
          fill="white"
          stroke="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
        />
      </svg>
      <AnimatedText text="Haz Plan" delay={3} />
    </div>
  );
}

export default VectorAnimado;
