import { useState, useEffect } from "react";

function EventTypeSelector({
  selectedType,
  onTypeChange,
  userType = "normal",
}) {
  // Estado para controlar el tip de ayuda
  const [showTipBanner, setShowTipBanner] = useState(true);

  // Auto-cerrar el banner después de 8 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTipBanner(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);
  const eventTypes = [
    {
      id: "personal",
      name: "Evento Personal",
      icon: "👥",
      description: "Eventos sociales, reuniones y actividades personales",
      available: true,
      price: "Gratis",
    },
    {
      id: "ciudadania",
      name: "Ayuda Ciudadana",
      icon: "🤝",
      description: "Limpieza de espacios, voluntariado comunitario",
      available: true,
      price: "Gratis",
    },
    {
      id: "ongs",
      name: "Ayuda ONGs",
      icon: "🐾",
      description: "Emergencias con animales, asistencia social",
      available: true,
      price: "Gratis",
    },
    {
      id: "premium",
      name: "Evento Premium",
      icon: "⭐",
      description: "Eventos empresariales y PyMEs promocionales",
      available: userType === "empresa" || userType === "pyme",
      price:
        userType === "empresa" || userType === "pyme"
          ? "$299 MXN"
          : "Solo empresas",
    },
  ];

  return (
    <div style={{ marginBottom: "0", position: "relative" }}>
      {/* OPCIÓN 1: POPUP MODAL PEQUEÑO */}
      {showTipModal && (
        <div
          onClick={() => setShowTipModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "12px",
              maxWidth: "400px",
              margin: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              textAlign: "center",
              position: "relative",
              border: "2px solid #593c8f",
            }}
          >
            <button
              onClick={() => setShowTipModal(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                color: "#999",
              }}
            >
              ×
            </button>
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>💡</div>
            <h4
              style={{
                color: "#593c8f",
                margin: "0 0 10px 0",
                fontSize: "16px",
              }}
            >
              ¡Tip de Ayuda!
            </h4>
            <p
              style={{
                color: "#666",
                fontSize: "14px",
                margin: "0",
                lineHeight: "1.4",
              }}
            >
              Selecciona el tipo de evento que mejor se adapte a tu actividad.
              Los eventos personales y de ayuda son completamente gratuitos.
            </p>
            <div
              style={{
                fontSize: "12px",
                color: "#999",
                marginTop: "10px",
                fontStyle: "italic",
              }}
            >
              Se cierra automáticamente en 8 segundos
            </div>
          </div>
        </div>
      )}

      {/* OPCIÓN 2: BANNER FIJO ARRIBA */}
      {showTipBanner && (
        <div
          style={{
            backgroundColor: "#f8f5ff",
            border: "2px solid #593c8f",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "20px",
            textAlign: "center",
            position: "relative",
            boxShadow: "0 2px 8px rgba(89, 60, 143, 0.1)",
          }}
        >
          <button
            onClick={() => setShowTipBanner(false)}
            style={{
              position: "absolute",
              top: "8px",
              right: "12px",
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              color: "#999",
            }}
          >
            ×
          </button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <span style={{ fontSize: "20px" }}>💡</span>
            <div>
              <strong style={{ color: "#593c8f", fontSize: "14px" }}>
                ¡Tip de Ayuda!
              </strong>
              <p
                style={{
                  color: "#666",
                  fontSize: "13px",
                  margin: "5px 0 0 0",
                  lineHeight: "1.3",
                }}
              >
                Elige entre eventos personales gratuitos, ayuda ciudadana, apoyo
                a ONGs o eventos premium para empresas.
              </p>
            </div>
          </div>
        </div>
      )}

      <h3
        style={{
          color: "#2c3e50",
          marginBottom: "15px",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        🎯 Selecciona el tipo de evento
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {eventTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => type.available && onTypeChange(type.id)}
            style={{
              padding: "20px",
              borderRadius: "12px",
              border: `2px solid ${
                selectedType === type.id ? "#593c8f" : "#e0e0e0"
              }`,
              backgroundColor:
                selectedType === type.id
                  ? "#f8f5ff"
                  : type.available
                  ? "white"
                  : "#f5f5f5",
              cursor: type.available ? "pointer" : "not-allowed",
              transition: "all 0.3s ease",
              textAlign: "center",
              opacity: type.available ? 1 : 0.6,
              position: "relative",
              boxShadow:
                selectedType === type.id
                  ? "0 4px 12px rgba(89, 60, 143, 0.2)"
                  : "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>
              {type.icon}
            </div>

            <h4
              style={{
                color: type.available ? "#2c3e50" : "#999",
                margin: "0 0 8px 0",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {type.name}
            </h4>

            <p
              style={{
                color: type.available ? "#666" : "#999",
                fontSize: "12px",
                margin: "0 0 10px 0",
                lineHeight: "1.3",
              }}
            >
              {type.description}
            </p>

            <div
              style={{
                backgroundColor: type.available
                  ? type.price === "Gratis"
                    ? "#4CAF50"
                    : "#FF9800"
                  : "#ccc",
                color: "white",
                padding: "4px 8px",
                borderRadius: "6px",
                fontSize: "11px",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              {type.price}
            </div>

            {!type.available && type.id === "premium" && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#f44336",
                  color: "white",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                🔒 BLOQUEADO
              </div>
            )}

            {selectedType === type.id && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                ✓ SELECCIONADO
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedType === "premium" &&
        (userType === "empresa" || userType === "pyme") && (
          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeaa7",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <p style={{ margin: "0", color: "#856404", fontSize: "14px" }}>
              💳 <strong>Evento Premium:</strong> Se aplicará un cargo de $299
              MXN al publicar este evento.
              <br />
              <small>Incluye promoción destacada y mayor visibilidad.</small>
            </p>
          </div>
        )}

      {selectedType === "premium" && userType === "normal" && (
        <div
          style={{
            marginTop: "15px",
            padding: "15px",
            backgroundColor: "#f8d7da",
            border: "1px solid #f5c6cb",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: "0", color: "#721c24", fontSize: "14px" }}>
            🔒 <strong>Acceso Restringido:</strong> Los eventos premium están
            disponibles solo para empresas afiliadas y PyMEs registradas.
            <br />
            <small>Contáctanos para obtener acceso empresarial.</small>
          </p>
        </div>
      )}
    </div>
  );
}

export default EventTypeSelector;
