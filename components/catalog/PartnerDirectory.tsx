"use client";

import { useMemo, useState } from "react";
import { GlobeHemisphereWest, MagnifyingGlass, MapPin, Storefront } from "@phosphor-icons/react";
import { partnerStores } from "@/lib/mock-data";
import type { PartnerStore } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./catalog.module.scss";

type CategoryFilter = "Tutti" | PartnerStore["category"];

const categories: CategoryFilter[] = ["Tutti", "Nutrizione", "Training", "Attrezzatura", "Outdoor", "Recovery", "Servizi"];

function PartnerMark({ partner }: { partner: PartnerStore }) {
  const initials = partner.name.split(" ").map((word) => word[0]).join("").slice(0, 2);
  return <span className={`${styles.directoryMark} ${styles[partner.accent]}`} aria-hidden="true">{initials}</span>;
}

export function PartnerDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("Tutti");
  const normalizedQuery = query.trim().toLocaleLowerCase("it");

  const filteredPartners = useMemo(() => partnerStores.filter((partner) => {
    const matchesCategory = category === "Tutti" || partner.category === category;
    const searchable = `${partner.name} ${partner.category} ${partner.location} ${partner.description}`.toLocaleLowerCase("it");
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  }), [category, normalizedQuery]);

  return (
    <Reveal>
      <section className={styles.partnerSection} aria-label="Directory dei partner affiliati">
        <div className="shell">
          <SectionHeading eyebrow={`${partnerStores.length} realtà selezionate`} title="Tutti i partner, un solo Pass." description="Negozi, studi e brand scelti per accompagnare ogni parte della tua performance." />
          <div className={styles.partnerToolbar}>
            <label className={styles.partnerSearch}>
              <span className="srOnly">Cerca un partner o una città</span>
              <MagnifyingGlass size={18} aria-hidden="true" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cerca partner o città" type="search" />
            </label>
            <div className={styles.partnerFilters} role="group" aria-label="Filtra i partner per categoria">
              {categories.map((item) => (
                <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
              ))}
            </div>
          </div>

          <p className={styles.partnerCount} aria-live="polite">{filteredPartners.length} {filteredPartners.length === 1 ? "partner trovato" : "partner trovati"}</p>

          {filteredPartners.length > 0 ? (
            <div className={styles.partnerGrid}>
              {filteredPartners.map((partner) => (
                <article key={partner.id} className={styles.partnerCard}>
                  <div className={styles.partnerCardTop}>
                    <PartnerMark partner={partner} />
                    <span className={styles.partnerCategory}>{partner.category}</span>
                  </div>
                  <div className={styles.partnerCardBody}>
                    <h3>{partner.name}</h3>
                    <p>{partner.description}</p>
                  </div>
                  <div className={styles.partnerMeta}>
                    <span>{partner.availability === "Online" ? <GlobeHemisphereWest size={16} aria-hidden="true" /> : <Storefront size={16} aria-hidden="true" />}{partner.availability}</span>
                    <span><MapPin size={16} aria-hidden="true" />{partner.location}</span>
                  </div>
                  <div className={styles.partnerBenefit}><span>Vantaggio membri</span><strong>{partner.memberBenefit}</strong></div>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.partnerEmpty} role="status"><Storefront size={28} aria-hidden="true" /><h3>Nessun partner trovato</h3><p>Prova una categoria diversa o modifica la ricerca.</p><button type="button" onClick={() => { setQuery(""); setCategory("Tutti"); }}>Azzera i filtri</button></div>
          )}
        </div>
      </section>
    </Reveal>
  );
}
