"""empty message

Revision ID: e2928d80bd89
Revises: 68abeff761ff
Create Date: 2023-07-01 02:33:13.531454

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e2928d80bd89'
down_revision = '68abeff761ff'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('proyecto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('direction', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('muestra',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('project_name', sa.String(length=150), nullable=False),
    sa.Column('ubication', sa.String(length=120), nullable=False),
    sa.Column('ubication_image', sa.String(length=120), nullable=False),
    sa.Column('area', sa.String(length=80), nullable=False),
    sa.Column('specimen', sa.String(length=80), nullable=False),
    sa.Column('quality_specimen', sa.String(length=80), nullable=False),
    sa.Column('image_specimen', sa.String(length=80), nullable=False),
    sa.Column('aditional_comments', sa.String(length=90), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('proyecto_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['proyecto_id'], ['proyecto.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('last_name', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('rut', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('rol', sa.String(length=20), nullable=False))
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=200),
               existing_nullable=False)
        batch_op.create_unique_constraint(None, ['rut'])
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='unique')
        batch_op.alter_column('password',
               existing_type=sa.String(length=200),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.drop_column('rol')
        batch_op.drop_column('rut')
        batch_op.drop_column('last_name')
        batch_op.drop_column('name')

    op.drop_table('muestra')
    op.drop_table('proyecto')
    # ### end Alembic commands ###
