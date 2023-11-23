import pandas as pd
from sqlalchemy import create_engine

df = pd.read_parquet('features_sep.parquet')
engine = create_engine('postgresql://public_hysteria:0666@localhost:5432/rutube')
df.to_sql("my_table_name", engine)

