import { Briefcase, Globe, Mail, MapPin, Phone } from "lucide-react";
import { SignatureData } from "./types";

export function ModernTemplate({ data }: { data: SignatureData }) {
  return (
    <div
      id="email-signature"
      style={{
        fontFamily: data.theme.font,
        color: data.theme.textColor,
        backgroundColor: data.theme.backgroundColor,
        padding: "16px",
        border: "1px solid #ddd",
        width: "fit-content",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            {data.profileImage && (
              <td style={{ paddingRight: "16px" }}>
                <img
                  src={data.profileImage}
                  alt={data.name}
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              </td>
            )}
            <td>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
                {data.name}
              </h3>
              {data.pronouns && (
                <p style={{ margin: 0, fontSize: "12px" }}>({data.pronouns})</p>
              )}
              <p
                style={{
                  margin: "2px 0",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {data.position}
              </p>
              {data.department && (
                <p style={{ margin: 0, fontSize: "12px" }}>{data.department}</p>
              )}
              <p style={{ margin: "2px 0", fontSize: "14px" }}>
                {data.company}
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <table style={{ marginTop: "8px", fontSize: "12px", width: "100%" }}>
        <tbody>
          {data.email && (
            <tr>
              <td>
                <Mail
                  size={16}
                  style={{
                    color: data.theme.iconColor,
                    verticalAlign: "middle",
                  }}
                />{" "}
              </td>
              <td style={{ paddingRight: "8px", whiteSpace: "nowrap" }}>
                Email:
              </td>
              <td>
                <a
                  href={`mailto:${data.email}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {data.email}
                </a>
              </td>
            </tr>
          )}
          {data.cellphone && (
            <tr>
              <td>
                <Phone
                  size={16}
                  style={{
                    color: data.theme.iconColor,
                    verticalAlign: "middle",
                  }}
                />{" "}
              </td>
              <td style={{ paddingRight: "8px", whiteSpace: "nowrap" }}>
                Phone:
              </td>
              <td>
                <a
                  href={`tel:${data.cellphone}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {data.cellphone}
                </a>
              </td>
            </tr>
          )}
          {data.address && (
            <tr>
              <td>
                <MapPin
                  size={16}
                  style={{
                    color: data.theme.iconColor,
                    verticalAlign: "middle",
                  }}
                />{" "}
              </td>
              <td style={{ paddingRight: "8px", whiteSpace: "nowrap" }}>
                Address:
              </td>
              <td>{data.address}</td>
            </tr>
          )}
        </tbody>
      </table>

      {data.social.length > 0 && (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {data.social.map(
            (social) =>
              social.link && (
                <>
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                      style={{ verticalAlign: "middle" }}
                    />
                  </a>
                </>
              )
          )}
        </div>
      )}

      {data.addons.banner && (
        <div style={{ marginTop: "16px" }}>
          <img
            src={data.addons.banner}
            alt="Banner"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}

      {data.addons.customHtml && (
        <div
          style={{ marginTop: "16px" }}
          dangerouslySetInnerHTML={{ __html: data.addons.customHtml }}
        />
      )}

      {data.addons.signOff && (
        <p style={{ marginTop: "16px", fontSize: "12px" }}>
          {data.addons.signOff}
        </p>
      )}

      {data.addons.disclaimer && (
        <p style={{ marginTop: "8px", fontSize: "10px", color: "gray" }}>
          {data.addons.disclaimer}
        </p>
      )}
    </div>
  );
}

export function ClassicTemplate({ data }: { data: SignatureData }) {
  return (
    <div
      style={{
        fontSize: "10pt",
        fontFamily: data.theme.font,
        color: data.theme.textColor,
        backgroundColor: data.theme.backgroundColor,
        width: "500px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <table
        cellSpacing="0"
        cellPadding="0"
        border={0}
        style={{ width: "100%" }}
      >
        <tbody>
          <tr>
            <td style={{ width: "150px" }} valign="top" rowSpan={0}>
              {data.profileImage && (
                <img
                  src={data.profileImage}
                  alt="Profile"
                  width="100%"
                  style={{ marginBottom: "10px", marginRight: "40px" }}
                />
              )}
            </td>
            <td
              style={{
                fontSize: "10pt",
                lineHeight: "18px",
                verticalAlign: "top",
                paddingRight: "10px",
              }}
            >
              <span style={{ fontSize: "16pt", fontWeight: "bold" }}>
                {data.name}
              </span>
              <br />
              <span style={{ fontSize: "10pt" }}>
                <strong>{data.position}</strong>
                <br />

                <span style={{ fontSize: "9pt" }}>{data.department}</span>
              </span>
              <br />
              {data.pronouns && (
                <>
                  <span style={{ fontSize: "9pt" }}>({data.pronouns})</span>
                  <br />
                </>
              )}
              {data.company && (
                <>
                  {" "}
                  <span
                    style={{
                      fontSize: "9pt",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    {" "}
                    <Briefcase
                      size={15}
                      style={{ color: data.theme.iconColor }}
                    />{" "}
                    <strong>Company:</strong> {data.company}
                  </span>
                </>
              )}
              {data.cellphone && (
                <span
                  style={{
                    fontSize: "9pt",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {" "}
                  <Phone
                    size={15}
                    style={{ color: data.theme.iconColor }}
                  />{" "}
                  <strong>Mobile:</strong> {data.cellphone}
                </span>
              )}
              {data.email && (
                <span
                  style={{
                    fontSize: "9pt",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Mail size={15} style={{ color: data.theme.iconColor }} />{" "}
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${data.email}`}
                    style={{
                      textDecoration: "none",
                      color: data.theme.textColor,
                    }}
                  >
                    {data.email}
                  </a>
                </span>
              )}
              {data.address && (
                <span
                  style={{
                    fontSize: "9pt",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <MapPin size={30} style={{ color: data.theme.iconColor }} />{" "}
                  <strong>Address:</strong> {data.address}
                </span>
              )}

              <br />
              {data.website && (
                <>
                  {" "}
                  <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      fontSize: "9pt",
                      fontWeight: "bold",
                      color: data.theme.textColor,
                    }}
                  >
                    <Globe size={12} style={{ color: data.theme.iconColor }} />{" "}
                    {data.website}
                  </a>
                  <br />
                </>
              )}

              {data.companylogo && (
                <img
                  src={data.companylogo}
                  alt="Company Logo"
                  width="100"
                  style={{ marginTop: "10px" }}
                />
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {data.social.length > 0 &&
          data.social.map(
            (social, index) =>
              social.link && (
                <>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      style={{
                        border: "0",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </a>
                </>
              )
          )}
      </div>

      {data.addons.banner && (
        <a href={data.addons.banner} target="_blank" rel="noopener noreferrer">
          <img
            src={data.addons.banner}
            alt="Banner"
            width="200"
            style={{ width: "100%", height: "auto", border: "0" }}
          />
        </a>
      )}
      <br />
      {data.addons.signOff && (
        <p>
          <strong>{data.addons.signOff}</strong>
        </p>
      )}
      {data.addons.disclaimer && (
        <p style={{ fontSize: "8pt", color: "gray" }}>
          {data.addons.disclaimer}
        </p>
      )}
      {data.addons.greenMessage && (
        <p style={{ fontSize: "8pt", color: "green" }}>
          {data.addons.greenMessage}
        </p>
      )}
    </div>
  );
}

export function ProfessionalTemplate({ data }: { data: SignatureData }) {
  return (
    <div
      style={{
        fontSize: "10pt",
        fontFamily: data.theme.font,
        color: data.theme.textColor,
      }}
    >
      <table
        cellSpacing={0}
        cellPadding={0}
        border={0}
        style={{ width: "489px", background: "transparent" }}
      >
        <tbody>
          <tr>
            <td
              style={{
                width: "320px",
                paddingBottom: "10px",
                fontSize: "9pt",
                lineHeight: "18px",
              }}
            >
              <span
                style={{
                  fontSize: "24pt",
                  fontWeight: "bold",
                  color: data.theme.textColor,
                }}
              >
                {data.name}
              </span>
            </td>
            <td style={{ textAlign: "right", paddingBottom: "10px" }}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                {data.social.map(
                  (social, index) =>
                    social.link && (
                      <>
                        <a
                          key={index}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={social.icon}
                            alt={social.name}
                            width="20"
                            height="20"
                            style={{ border: 0, marginLeft: "5px" }}
                          />
                        </a>
                      </>
                    )
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              style={{
                fontSize: "9pt",
                padding: "10px 0",
                borderTop: "1px solid #000",
              }}
            >
              <table cellSpacing={0} cellPadding={0} border={0}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        width: "200px",
                        fontSize: "9pt",
                        padding: "10px 0",
                      }}
                    >
                      <span>{data.position}</span>
                      <br />
                      <span style={{ fontWeight: "bold" }}>{data.company}</span>
                      <br />
                      {data.website && (
                        <a
                          href={data.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontWeight: "bold",
                            color: data.theme.iconColor,
                          }}
                        >
                          {data.website}
                        </a>
                      )}
                    </td>
                    <td>
                      <table cellSpacing={0} cellPadding={0} border={0}>
                        <tbody>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Email:</td>
                            <td>
                              <a
                                href={`mailto:${data.email}`}
                                style={{
                                  color: data.theme.iconColor,
                                  textDecoration: "none",
                                }}
                              >
                                {data.email}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Mobile:</td>
                            <td>{data.cellphone}</td>
                          </tr>
                          <tr>
                            <td style={{ fontWeight: "bold" }}>Address:</td>
                            <td>{data.address}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {data.addons.banner && (
            <tr>
              <td colSpan={2} style={{ paddingTop: "10px" }}>
                <a
                  href={data.addons.banner}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={data.addons.banner}
                    alt="Banner"
                    width="489"
                    style={{ maxWidth: "489px", height: "auto", border: 0 }}
                  />
                </a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function MinimalTemplate({ data }: { data: SignatureData }) {
  return (
    <div
      style={{
        fontSize: "10pt",
        fontFamily: data.theme.font,
        color: data.theme.textColor,
        backgroundColor: data.theme.backgroundColor,
        padding: "10px",
        maxWidth: "500px",
      }}
    >
      <table
        cellSpacing={0}
        cellPadding={0}
        border={0}
        style={{ width: "100%", background: "transparent" }}
      >
        <tbody>
          <tr>
            {/* Profile Image */}
            {data.profileImage && (
              <td
                style={{
                  width: "120px",
                  verticalAlign: "top",
                  paddingRight: "10px",
                  borderRight: "1px solid #3e59ff",
                }}
              >
                <img
                  src={data.profileImage}
                  alt="Profile"
                  width="100"
                  style={{
                    borderRadius: "50%",
                    height: "auto",
                    width: "100px",
                  }}
                />
              </td>
            )}
            <td style={{ paddingLeft: "10px", verticalAlign: "top" }}>
              {/* Name and Pronouns */}
              <span
                style={{
                  fontSize: "14pt",
                  fontWeight: "bold",
                  color: data.theme.textColor,
                }}
              >
                {data.name} {data.pronouns && `(${data.pronouns})`}
              </span>
              <br />
              {/* Position and Department */}
              <span style={{ fontSize: "10pt", color: "#846d53" }}>
                {data.position} {data.department && `- ${data.department}`}
              </span>

              <p
                style={{
                  margin: "10px 0",
                  fontSize: "9pt",
                  lineHeight: "16px",
                  color: "#846d53",
                }}
              >
                {data.cellphone && (
                  <>
                    <strong>M:</strong> {data.cellphone} <br />
                  </>
                )}
                {data.email && (
                  <>
                    <strong>E:</strong>{" "}
                    <a
                      href={`mailto:${data.email}`}
                      style={{ textDecoration: "none", color: "#846d53" }}
                    >
                      {data.email}
                    </a>
                    <span> | </span>
                  </>
                )}
                {data.website && (
                  <a
                    href={data.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#846d53" }}
                  >
                    {data.website}
                  </a>
                )}
                <br />
                {data.address && <span>{data.address}</span>}
              </p>

              {data.social.length > 0 && (
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {data.social.map((social, index) =>
                    social.link ? (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={social.icon}
                          alt={social.name}
                          width="16"
                          height="16"
                        />
                      </a>
                    ) : null
                  )}
                </div>
              )}
            </td>
          </tr>

          {data.companylogo && (
            <tr>
              <td
                colSpan={2}
                style={{ textAlign: "center", paddingTop: "10px" }}
              >
                <img
                  src={data.companylogo}
                  alt="Company Logo"
                  width="120"
                  style={{ height: "auto" }}
                />
              </td>
            </tr>
          )}

          {/* Add-ons */}
          {data.addons.banner && (
            <tr>
              <td
                colSpan={2}
                style={{ paddingTop: "10px", textAlign: "center" }}
              >
                <a
                  href={data.addons.banner}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={data.addons.banner}
                    alt="Banner"
                    width="100%"
                    style={{ maxWidth: "500px", height: "auto" }}
                  />
                </a>
              </td>
            </tr>
          )}

          {/* Optional Sections */}
          {data.addons.signOff && (
            <tr>
              <td
                colSpan={2}
                style={{
                  fontSize: "9pt",
                  paddingTop: "10px",
                  fontStyle: "italic",
                }}
              >
                {data.addons.signOff}
              </td>
            </tr>
          )}

          {data.addons.disclaimer && (
            <tr>
              <td
                colSpan={2}
                style={{ fontSize: "8pt", paddingTop: "10px", color: "#777" }}
              >
                {data.addons.disclaimer}
              </td>
            </tr>
          )}

          {data.addons.greenMessage && (
            <tr>
              <td
                colSpan={2}
                style={{
                  fontSize: "8pt",
                  paddingTop: "10px",
                  color: "#4caf50",
                }}
              >
                {data.addons.greenMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export function BoldTemplate({ data }: { data: SignatureData }) {
  return (
    <div
      style={{
        fontSize: "10pt",
        fontFamily: data.theme.font,
        color: data.theme.textColor,
        backgroundColor: data.theme.backgroundColor,
        padding: "10px",
        maxWidth: "500px",
      }}
    >
      <table cellSpacing={0} cellPadding={0} border={0} style={{ width: "100%", background: "transparent" }}>
        <tbody>
          <tr>
            {/* Profile Image */}
            {data.profileImage && (
              <td style={{ width: "120px", verticalAlign: "top", paddingRight: "10px", borderRight: "1px solid #3e59ff" }}>
                <img
                  src={data.profileImage}
                  alt="Profile"
                  width="100"
                  style={{ borderRadius: "50%", height: "auto", width: "100px" }}
                />
              </td>
            )}
            <td style={{ paddingLeft: "10px", verticalAlign: "top" }}>
              {/* Name and Pronouns */}
              <span style={{ fontSize: "14pt", fontWeight: "bold", color: data.theme.textColor }}>
                {data.name} {data.pronouns && `(${data.pronouns})`}
              </span>
              <br />
              {/* Position and Department */}
              <span style={{ fontSize: "10pt", color: "#846d53" }}>
                {data.position} {data.department && `- ${data.department}`}
              </span>

              {/* Contact Information */}
              <p style={{ margin: "10px 0", fontSize: "9pt", lineHeight: "16px", color: "#846d53" }}>

                {data.cellphone && (
                  <>
                    <strong>M:</strong> {data.cellphone} <br />
                  </>
                )}
                {data.email && (
                  <>
                    <strong>E:</strong>{" "}
                    <a href={`mailto:${data.email}`} style={{ textDecoration: "none", color: "#846d53" }}>
                      {data.email}
                    </a>
                    <span> | </span>
                  </>
                )}
                {data.website && (
                  <a href={data.website} target="_blank" rel="noopener noreferrer" style={{ color: "#846d53" }}>
                    {data.website}
                  </a>
                )}
                <br />
                {data.address && <span>{data.address}</span>}
              </p>

              {/* Social Links */}
              {data.social.length > 0 && (
                <div style={{ marginTop: "10px" }}>
                  {data.social.map((social, index) =>
                    social.link ? (
                      <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                        <img
                          src={social.icon}
                          alt={social.name}
                          width="16"
                          height="16"
                          style={{ marginRight: "5px", border: "0" }}
                        />
                      </a>
                    ) : null
                  )}
                </div>
              )}
            </td>
          </tr>

          {/* Company Logo */}
          {data.companylogo && (
            <tr>
              <td colSpan={2} style={{ textAlign: "center", paddingTop: "10px" }}>
                <img src={data.companylogo} alt="Company Logo" width="120" style={{ height: "auto" }} />
              </td>
            </tr>
          )}

          {/* Add-ons */}
          {data.addons.banner && (
            <tr>
              <td colSpan={2} style={{ paddingTop: "10px", textAlign: "center" }}>
                <a href={data.addons.banner} target="_blank" rel="noopener noreferrer">
                  <img src={data.addons.banner} alt="Banner" width="100%" style={{ maxWidth: "500px", height: "auto" }} />
                </a>
              </td>
            </tr>
          )}

          {/* Optional Sections */}
          {data.addons.signOff && (
            <tr>
              <td colSpan={2} style={{ fontSize: "9pt", paddingTop: "10px", fontStyle: "italic" }}>
                {data.addons.signOff}
              </td>
            </tr>
          )}

          {data.addons.disclaimer && (
            <tr>
              <td colSpan={2} style={{ fontSize: "8pt", paddingTop: "10px", color: "#777" }}>
                {data.addons.disclaimer}
              </td>
            </tr>
          )}

          {data.addons.greenMessage && (
            <tr>
              <td colSpan={2} style={{ fontSize: "8pt", paddingTop: "10px", color: "#4caf50" }}>
                {data.addons.greenMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}


export function CreativeTemplate({ data }: { data: SignatureData }) {
  return (
    <div
      style={{
        fontFamily: data.theme.font,
        color: data.theme.textColor,
        backgroundColor: data.theme.backgroundColor,
      }}
      className="text-center"
    >
      {data.profileImage && (
        <img
          src={data.profileImage}
          alt={data.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
      )}
      <h3 className="text-2xl font-bold">{data.name}</h3>
      {data.pronouns && <p className="text-sm">({data.pronouns})</p>}
      <div className="my-2">
        <p className="font-medium">{data.position}</p>
        <p className="text-sm">{data.company}</p>
      </div>
      <div className="mt-4 space-y-1 text-sm flex flex-col items-center">
        {data.email && (
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2"
            style={{ color: data.theme.textColor }}
          >
            <Mail size={16} style={{ color: data.theme.iconColor }} />
            {data.email}
          </a>
        )}
        {data.cellphone && (
          <a
            href={`tel:${data.cellphone}`}
            className="flex items-center gap-2"
            style={{ color: data.theme.textColor }}
          >
            <Phone size={16} style={{ color: data.theme.iconColor }} />
            {data.cellphone}
          </a>
        )}
        {data.address && (
          <p className="flex items-center gap-2">
            <MapPin size={16} style={{ color: data.theme.iconColor }} />
            {data.address}
          </p>
        )}
      </div>
      {data.addons.customHtml && (
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: data.addons.customHtml }}
        />
      )}
    </div>
  );
}
