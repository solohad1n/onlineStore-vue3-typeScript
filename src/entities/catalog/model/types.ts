interface CatalogSections{
  label: string;
  link: string;
}

interface CatalogStore{
  sections: CatalogSections[]
}

export { type CatalogSections, type CatalogStore }