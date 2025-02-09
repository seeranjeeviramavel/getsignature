import { SignatureData } from "./types";

export function ModernTemplate({ data }: { data: SignatureData }) {
    return (
      <div
        style={{
          fontFamily: data.theme.font,
          color: data.theme.textColor,
          backgroundColor: data.theme.backgroundColor,
        }}
        className="flex gap-4"
      >
        {data.profileImage && (
          <img
            src={data.profileImage}
            alt={data.name}
            className="w-24 h-24 rounded-full object-cover"
          />
        )}
        <div>
          <h3 className="text-xl font-bold">{data.name}</h3>
          {data.pronouns && <span className="text-sm">({data.pronouns})</span>}
          <p className="text-sm font-medium">{data.position}</p>
          <p className="text-sm">{data.company}</p>
          <div className="mt-2 space-y-1 text-sm">
            {data.email && (
              <p className="flex items-center gap-2">
                <Mail size={16} style={{ color: data.theme.iconColor }} />
                <a href={`mailto:${data.email}`} style={{ color: data.theme.textColor }}>{data.email}</a>
              </p>
            )}
            {data.cellphone && (
              <p className="flex items-center gap-2">
                <Phone size={16} style={{ color: data.theme.iconColor }} />
                <a href={`tel:${data.cellphone}`} style={{ color: data.theme.textColor }}>{data.cellphone}</a>
              </p>
            )}
            {data.address && (
              <p className="flex items-center gap-2">
                <MapPin size={16} style={{ color: data.theme.iconColor }} />
                {data.address}
              </p>
            )}
          </div>
          {data.addons.customHtml && (
            <div className="mt-4" dangerouslySetInnerHTML={{ __html: data.addons.customHtml }} />
          )}
        </div>
      </div>
    );
  }
  
 export function ClassicTemplate({ data }: { data: SignatureData }) {
    return (
      <div
        style={{
          fontFamily: data.theme.font,
          color: data.theme.textColor,
          backgroundColor: data.theme.backgroundColor,
        }}
      >
        <h3 className="text-lg font-bold">{data.name}</h3>
        {data.pronouns && <p className="text-sm">({data.pronouns})</p>}
        <div className="my-2 border-t border-b py-2">
          <p className="font-medium">{data.position}</p>
          <p>{data.company}</p>
        </div>
        <div className="text-sm space-y-1">
          {data.email && (
            <p className="flex items-center gap-2">
              <Mail size={16} style={{ color: data.theme.iconColor }} />
              <a href={`mailto:${data.email}`} style={{ color: data.theme.textColor }}>{data.email}</a>
            </p>
          )}
          {data.cellphone && (
            <p className="flex items-center gap-2">
              <Phone size={16} style={{ color: data.theme.iconColor }} />
              <a href={`tel:${data.cellphone}`} style={{ color: data.theme.textColor }}>{data.cellphone}</a>
            </p>
          )}
          {data.address && (
            <p className="flex items-center gap-2">
              <MapPin size={16} style={{ color: data.theme.iconColor }} />
              {data.address}
            </p>
          )}
        </div>
        {data.addons.customHtml && (
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: data.addons.customHtml }} />
        )}
      </div>
    );
  }
  
  export function MinimalTemplate({ data }: { data: SignatureData }) {
    return (
      <div
        style={{
          fontFamily: data.theme.font,
          color: data.theme.textColor,
          backgroundColor: data.theme.backgroundColor,
        }}
        className="space-y-2"
      >
        <p className="font-bold">{data.name}</p>
        {data.pronouns && <span className="text-sm">({data.pronouns})</span>}
        <p className="text-sm">{data.position} at {data.company}</p>
        <div className="flex items-center gap-4 text-sm">
          {data.email && (
            <a href={`mailto:${data.email}`} className="flex items-center gap-1" style={{ color: data.theme.textColor }}>
              <Mail size={16} style={{ color: data.theme.iconColor }} />
              {data.email}
            </a>
          )}
          {data.cellphone && (
            <a href={`tel:${data.cellphone}`} className="flex items-center gap-1" style={{ color: data.theme.textColor }}>
              <Phone size={16} style={{ color: data.theme.iconColor }} />
              {data.cellphone}
            </a>
          )}
        </div>
        {data.addons.customHtml && (
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: data.addons.customHtml }} />
        )}
      </div>
    );
  }
  
  export function BoldTemplate({ data }: { data: SignatureData }) {
    return (
      <div
        style={{
          fontFamily: data.theme.font,
          color: data.theme.textColor,
          backgroundColor: data.theme.backgroundColor,
        }}
        className="border-l-4 pl-4"
      >
        <div className="flex items-center gap-4">
          {data.profileImage && (
            <img
              src={data.profileImage}
              alt={data.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
          )}
          <div>
            <h3 className="text-xl font-bold">{data.name}</h3>
            {data.pronouns && <span className="text-sm">({data.pronouns})</span>}
            <p className="font-medium">{data.position}</p>
            <p className="text-sm">{data.company}</p>
          </div>
        </div>
        <div className="mt-4 text-sm space-y-1">
          {data.email && (
            <p className="flex items-center gap-2">
              <Mail size={16} style={{ color: data.theme.iconColor }} />
              <a href={`mailto:${data.email}`} style={{ color: data.theme.textColor }}>{data.email}</a>
            </p>
          )}
          {data.cellphone && (
            <p className="flex items-center gap-2">
              <Phone size={16} style={{ color: data.theme.iconColor }} />
              <a href={`tel:${data.cellphone}`} style={{ color: data.theme.textColor }}>{data.cellphone}</a>
            </p>
          )}
          {data.address && (
            <p className="flex items-center gap-2">
              <MapPin size={16} style={{ color: data.theme.iconColor }} />
              {data.address}
            </p>
          )}
        </div>
        {data.addons.customHtml && (
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: data.addons.customHtml }} />
        )}
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
            <a href={`mailto:${data.email}`} className="flex items-center gap-2" style={{ color: data.theme.textColor }}>
              <Mail size={16} style={{ color: data.theme.iconColor }} />
              {data.email}
            </a>
          )}
          {data.cellphone && (
            <a href={`tel:${data.cellphone}`} className="flex items-center gap-2" style={{ color: data.theme.textColor }}>
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
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: data.addons.customHtml }} />
        )}
      </div>
    );
  }